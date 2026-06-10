"use client";

import { useEffect, useRef, useCallback } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

// ── Paste your Mapbox public token here ────────────────────────────
mapboxgl.accessToken = process.env.NEXT_PUBLIC_API_MAPBOX_KEY;
// ───────────────────────────────────────────────────────────────────

type Office = {
  name: string;
  email?: string;
  phoneNo?: string;
  faxNo?: string;
  address: string;
  website?: string;
  lat: number;
  lng: number;
};

type MapboxMapProps = {
  offices: Office[];
  activeOffice?: Office | null;
  onMarkerClick?: (office: Office) => void;
};

export default function MapboxMap({
  offices,
  activeOffice,
  onMarkerClick,
}: MapboxMapProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const markersRef = useRef<mapboxgl.Marker[]>([]);
  const popupsRef = useRef<mapboxgl.Popup[]>([]);

  // ── Helper: build a numbered SVG pin exactly like Google Maps ──
  const createMarkerEl = useCallback(
    (number: number, isActive: boolean): HTMLDivElement => {
      const color = isActive ? "#BA0C2F" : "#1a73e8";
      const div = document.createElement("div");
      div.style.cssText = "cursor:pointer;";
      div.innerHTML = `
      <div style="
        position:relative;width:32px;height:42px;
        filter:drop-shadow(0 2px 5px rgba(0,0,0,0.35));
        transition:transform 0.15s ease;
      " class="mapbox-pin">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 42" width="32" height="42">
          <path d="M16 0C7.163 0 0 7.163 0 16c0 10.875 14.25 24.938 15.25 25.938a1.06 1.06 0 0 0 1.5 0C17.75 40.938 32 26.875 32 16 32 7.163 24.837 0 16 0z"
            fill="${color}"/>
          <circle cx="16" cy="15" r="9" fill="white" opacity="0.95"/>
          <text x="16" y="19.5"
            text-anchor="middle"
            font-size="10"
            font-weight="700"
            font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif"
            fill="${color}">${number}</text>
        </svg>
      </div>`;
      div.addEventListener("mouseenter", () => {
        const pin = div.querySelector(".mapbox-pin") as HTMLDivElement;
        if (pin) pin.style.transform = "scale(1.2) translateY(-3px)";
      });
      div.addEventListener("mouseleave", () => {
        const pin = div.querySelector(".mapbox-pin") as HTMLDivElement;
        if (pin) pin.style.transform = "scale(1) translateY(0)";
      });
      return div;
    },
    [],
  );

  // ── Helper: build a Google Maps–style popup ──────────────────────
  const createPopupHTML = (office: Office) => `
    <div style="
      font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;
      min-width:190px;padding:2px 0 4px;
    ">
      <p style="font-weight:700;font-size:14px;margin:0 0 5px;color:#1a1a1a;line-height:1.3">
        ${office.name}
      </p>
      <p style="font-size:12px;color:#666;margin:0 0 5px;line-height:1.5">
        ${office.address}
      </p>
      ${office.phoneNo ? `<p style="font-size:12px;color:#1a73e8;margin:0">${office.phoneNo}</p>` : ""}
      ${
        office.email
          ? `<p style="font-size:12px;color:#1a73e8;margin:4px 0 0">
        <a href="mailto:${office.email}" style="color:#1a73e8;text-decoration:none">${office.email}</a>
      </p>`
          : ""
      }
    </div>`;

  // ── Initialise map once ──────────────────────────────────────────
  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) return;

    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      // "streets-v12" is visually the closest Mapbox style to Google Maps
      style: "mapbox://styles/mapbox/streets-v12",
      center: [offices[0]?.lng ?? 0, offices[0]?.lat ?? 0],
      zoom: 5,
      attributionControl: false,
    });

    // Zoom + compass — bottom right like Google Maps
    mapRef.current.addControl(
      new mapboxgl.NavigationControl({ visualizePitch: false }),
      "bottom-right",
    );

    // Small attribution bottom-left
    mapRef.current.addControl(
      new mapboxgl.AttributionControl({ compact: true }),
      "bottom-left",
    );

    return () => {
      mapRef.current?.remove();
      mapRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ── Re-render markers whenever offices (zone) changes ───────────
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    // Remove old markers & popups
    markersRef.current.forEach((m) => m.remove());
    popupsRef.current.forEach((p) => p.remove());
    markersRef.current = [];
    popupsRef.current = [];

    if (!offices || offices.length === 0) return;

    const bounds = new mapboxgl.LngLatBounds();

    offices.forEach((office, index) => {
      const isActive =
        activeOffice?.lat === office.lat && activeOffice?.lng === office.lng;

      const popup = new mapboxgl.Popup({
        offset: [0, -42],
        closeButton: true,
        closeOnClick: false,
        className: "mapbox-gmap-popup",
        maxWidth: "260px",
      }).setHTML(createPopupHTML(office));

      const markerEl = createMarkerEl(index + 1, isActive);

      const marker = new mapboxgl.Marker({
        element: markerEl,
        anchor: "bottom",
      })
        .setLngLat([office.lng, office.lat])
        .setPopup(popup)
        .addTo(map);

      markerEl.addEventListener("click", () => {
        onMarkerClick?.(office);
        // close all other popups first
        popupsRef.current.forEach((p) => p.isOpen() && p.remove());
        marker.togglePopup();
      });

      if (isActive) {
        // open popup for active card immediately after map settles
        setTimeout(() => marker.togglePopup(), 300);
      }

      markersRef.current.push(marker);
      popupsRef.current.push(popup);
      bounds.extend([office.lng, office.lat]);
    });

    // Fit all pins into view
    map.fitBounds(bounds, { padding: 60, maxZoom: 14, duration: 800 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offices]);

  // ── Pan to active office when card is hovered ────────────────────
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !activeOffice) return;

    map.easeTo({
      center: [activeOffice.lng, activeOffice.lat],
      duration: 400,
    });

    // Update marker colours to reflect new active state
    markersRef.current.forEach((marker, index) => {
      const office = offices[index];
      const isActive =
        office?.lat === activeOffice.lat && office?.lng === activeOffice.lng;
      const el = marker.getElement();
      if (!el) return;

      const color = isActive ? "#BA0C2F" : "#1a73e8";
      const svg = el.querySelector("svg");
      if (!svg) return;

      const path = svg.querySelector("path");
      const circle = svg.querySelector("circle");
      const text = svg.querySelector("text");
      if (path) path.setAttribute("fill", color);
      if (text) text.setAttribute("fill", color);

      // Bump z-index so active pin sits on top
      el.style.zIndex = isActive ? "9999" : "0";

      if (isActive) {
        popupsRef.current.forEach((p) => p.isOpen() && p.remove());
        marker.togglePopup();
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeOffice]);

  return (
    <>
      <style>{`
        /* Google Maps–style popup */
        .mapbox-gmap-popup .mapboxgl-popup-content {
          border-radius: 8px;
          box-shadow: 0 2px 14px rgba(0,0,0,0.18);
          padding: 12px 14px 10px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }
        .mapbox-gmap-popup .mapboxgl-popup-tip {
          border-top-color: #fff !important;
        }
        .mapbox-gmap-popup .mapboxgl-popup-close-button {
          font-size: 16px;
          color: #888;
          padding: 4px 8px;
          right: 0;
          top: 0;
        }
        .mapbox-gmap-popup .mapboxgl-popup-close-button:hover {
          background: #f5f5f5;
          border-radius: 0 8px 0 0;
          color: #333;
        }

        /* Navigation control — Google Maps white square style */
        .mapboxgl-ctrl-group {
          border-radius: 4px !important;
          box-shadow: 0 1px 4px rgba(0,0,0,0.25) !important;
          overflow: hidden;
        }
        .mapboxgl-ctrl-group button {
          width: 29px !important;
          height: 29px !important;
          background-color: #fff !important;
          border-bottom: 1px solid #e0e0e0 !important;
        }
        .mapboxgl-ctrl-group button:last-child {
          border-bottom: none !important;
        }
        .mapboxgl-ctrl-group button:hover {
          background-color: #f5f5f5 !important;
        }
        .mapboxgl-ctrl-icon {
          filter: brightness(0) saturate(100%) invert(40%) !important;
        }

        /* Compact attribution like Google Maps */
        .mapboxgl-ctrl-attrib {
          font-size: 10px !important;
        }
      `}</style>

      <div ref={mapContainerRef} style={{ height: "100%", width: "100%" }} />
    </>
  );
}
