"use client";

/**
 * Post Detail Page
 * Place at: app/resources/[slug]/page.tsx
 * CSS file: app/resources/[slug]/post-detail.css
 */

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import {
  FaArrowLeft,
  FaCalendarAlt,
  FaDownload,
  FaImages,
  FaVolumeUp,
} from "react-icons/fa";
import "./post-detail.css";

// ─── Types ────────────────────────────────────────────────────────────────────

type MediaItem = {
  url: string;
  publicId?: string;
  originalName?: string;
};

type VideoGroup = {
  title: string;
  youtubeLinks: string[];
};

type AudioGroup = {
  title: string;
  audios: MediaItem[];
};

type ImageGroup = {
  title: string;
  images: MediaItem[];
};

type Post = {
  _id: string;
  category: string;
  subCategory: string | null;
  title: string;
  slug: string;
  contentHtml?: string;
  coverImage?: string;
  youtubeLinks?: string[];
  videoGroups?: VideoGroup[];
  audioGroups?: AudioGroup[];
  additionalImages?: MediaItem[];
  imageGroups?: ImageGroup[];
  pdfUrl?: string;
  publishedAt?: string;
  createdAt?: string;
};

// ─── Constants ────────────────────────────────────────────────────────────────

const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL?.includes("/api/v1")
  ? `${process.env.NEXT_PUBLIC_API_BASE_URL}/posts`
  : `${
      process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000/api/v1"
    }/posts`;

// ─── Helpers ──────────────────────────────────────────────────────────────────

const formatDate = (date?: string) => {
  if (!date) return "";
  const d = new Date(date);

  if (Number.isNaN(d.getTime())) return "";

  return d.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
};

const normalizeKey = (value?: string | null) =>
  value?.toLowerCase().trim().replaceAll("-", "_").replaceAll(" ", "_") ?? "";

const isOutdoorCommercial = (post: Post) => {
  const sub = normalizeKey(post.subCategory);
  const title = normalizeKey(post.title);

  return (
    post.category === "media_kit" &&
    (sub === "outdoor" ||
      sub === "outdoor_commercials" ||
      title === "outdoor" ||
      title === "outdoor_commercials")
  );
};

const getDisplayTitle = (post: Post) => {
  return isOutdoorCommercial(post) ? "Outdoor Commercials" : post.title;
};

const getEmbedUrl = (url: string) => {
  try {
    const p = new URL(url);

    if (p.hostname.includes("youtu.be")) {
      return `https://www.youtube.com/embed/${p.pathname.replace("/", "")}`;
    }

    if (p.hostname.includes("youtube.com")) {
      const id = p.searchParams.get("v");

      if (id) return `https://www.youtube.com/embed/${id}`;
    }

    return url;
  } catch {
    return url;
  }
};

const getCategoryLabel = (cat: string, sub?: string | null): string => {
  const normalizedSub = normalizeKey(sub);

  if (cat === "media_kit" && normalizedSub) {
    const m: Record<string, string> = {
      commercial: "Commercial",
      radio: "Radio",
      press_advertisement: "Press Ad",
      outdoor: "Outdoor Commercials",
      outdoor_commercials: "Outdoor Commercials",
      other_campaign: "Campaign",
    };

    return m[normalizedSub] ?? normalizedSub.replaceAll("_", " ");
  }

  const m: Record<string, string> = {
    news: "News",
    event: "Event",
    media_kit: "Media Kit",
    interview: "Interview",
  };

  return m[cat] ?? cat.replaceAll("_", " ");
};

// ─── Content Renderers ────────────────────────────────────────────────────────

const renderVideos = (links: string[] = [], postTitle = "") => {
  if (!links.length) return null;

  return (
    <div className="pd-video-grid">
      {links.map((link, i) => (
        <div className="pd-video-card" key={`${link}-${i}`}>
          <iframe
            src={getEmbedUrl(link)}
            title={`${postTitle} — Video ${i + 1}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      ))}
    </div>
  );
};

const renderCommercial = (post: Post) => {
  const displayTitle = getDisplayTitle(post);

  if (post.videoGroups?.length) {
    return (
      <div className="pd-group-list">
        {post.videoGroups.map((g, i) => (
          <div className="pd-group-box" key={`${g.title}-${i}`}>
            <h3 className="pd-group-title">{g.title}</h3>
            {renderVideos(g.youtubeLinks, displayTitle)}
          </div>
        ))}
      </div>
    );
  }

  return renderVideos(post.youtubeLinks ?? [], displayTitle);
};

const renderRadio = (post: Post) => {
  if (!post.audioGroups?.length) return null;

  return (
    <div className="pd-audio-section">
      {post.audioGroups.map((g, i) => (
        <div className="pd-audio-group" key={`${g.title}-${i}`}>
          <h3 className="pd-group-title">{g.title}</h3>

          <div className="pd-audio-list">
            {(g.audios ?? []).map((a, ai) => (
              <div className="pd-audio-card" key={`${a.url}-${ai}`}>
                <div className="pd-audio-icon">
                  <FaVolumeUp />
                </div>

                <div className="pd-audio-player">
                  <p>{a.originalName ?? `Audio ${ai + 1}`}</p>
                  <audio controls src={a.url} />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const renderPressAds = (post: Post) => {
  if (!post.additionalImages?.length) return null;

  const displayTitle = getDisplayTitle(post);

  return (
    <div className="pd-image-grid">
      {post.additionalImages.map((img, i) => (
        <a
          href={img.url}
          target="_blank"
          rel="noopener noreferrer"
          className="pd-image-card"
          key={`${img.url}-${i}`}
        >
          <Image
            src={img.url}
            alt={img.originalName ?? displayTitle}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 420px"
            className="pd-image-thumb"
          />

          <div className="pd-image-overlay">
            <span>View Full Size</span>
          </div>
        </a>
      ))}
    </div>
  );
};

const renderOutdoor = (post: Post) => {
  if (!post.imageGroups?.length) return null;

  const displayTitle = getDisplayTitle(post);

  const outdoorImages = post.imageGroups.flatMap((g) =>
    (g.images ?? []).map((img) => ({
      ...img,
      groupTitle: g.title,
    })),
  );

  if (!outdoorImages.length) return null;

  return (
    <div className="pd-image-grid">
      {outdoorImages.map((img, i) => (
        <a
          href={img.url}
          target="_blank"
          rel="noopener noreferrer"
          className="pd-image-card"
          key={`${img.url}-${i}`}
        >
          <Image
            src={img.url}
            alt={img.originalName ?? img.groupTitle ?? displayTitle}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 420px"
            className="pd-image-thumb"
          />

          <div className="pd-image-overlay">
            <span>View Full Size</span>
          </div>
        </a>
      ))}
    </div>
  );
};

const renderContent = (post: Post) => {
  const normalizedSub = normalizeKey(post.subCategory);
  const displayTitle = getDisplayTitle(post);

  if (post.category === "media_kit") {
    if (normalizedSub === "commercial") return renderCommercial(post);

    if (normalizedSub === "radio") return renderRadio(post);

    if (normalizedSub === "press_advertisement") return renderPressAds(post);

    if (
      normalizedSub === "outdoor" ||
      normalizedSub === "outdoor_commercials"
    ) {
      return renderOutdoor(post);
    }

    if (normalizedSub === "other_campaign" && post.contentHtml) {
      return (
        <div
          className="pd-html"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      );
    }
  }

  if (post.category === "interview") {
    return renderVideos(post.youtubeLinks ?? [], displayTitle);
  }

  if (post.pdfUrl) {
    return (
      <div className="pd-pdf-wrap">
        <a
          href={post.pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="pd-pdf-btn"
        >
          <FaDownload /> Download Document
        </a>
      </div>
    );
  }

  if (post.contentHtml) {
    return (
      <div
        className="pd-html"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    );
  }

  return (
    <div className="pd-empty">
      No detailed content available for this item yet.
    </div>
  );
};

// ─── Page Component ───────────────────────────────────────────────────────────

const PostDetailPage = () => {
  const params = useParams();
  const slug = params?.slug as string;

  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!slug) return;

    const fetchPost = async () => {
      try {
        const res = await fetch(`${API_URL}/${slug}`, { cache: "no-store" });
        const json = await res.json();

        if (!res.ok || !json?.data) {
          setNotFound(true);
          return;
        }

        setPost(json.data);
      } catch (err) {
        console.error("Detail fetch error:", err);
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  // ── Loading ──────────────────────────────────────────────────────────────────
  if (loading) {
    return (
      <div className="pd-screen-center">
        <div className="pd-spinner" />
        <p>Loading…</p>
      </div>
    );
  }

  // ── Not found ────────────────────────────────────────────────────────────────
  if (notFound || !post) {
    return (
      <div className="pd-screen-center">
        <FaImages className="pd-nf-icon" />
        <h2>Post not found</h2>
        <p>This page doesn&rsquo;t exist or has been removed.</p>

        <Link href="/resources" className="pd-nf-btn">
          <FaArrowLeft /> Back to Resources
        </Link>
      </div>
    );
  }

  const catLabel = getCategoryLabel(post.category, post.subCategory);
  const displayTitle = getDisplayTitle(post);
  const dateStr = formatDate(post.publishedAt ?? post.createdAt);

  // ── Render ───────────────────────────────────────────────────────────────────
  return (
    <main className="pd-page">
      <div className="pd-page-inner">
        <div className="pd-inner">
          {/* ── Back nav ── */}
          <Link href="/resources" className="pd-back-btn">
            <FaArrowLeft />
            Back to Resources
          </Link>

          {/* ── Page header ── */}
          <div className="pd-header">
            <h1 className="pd-title">{displayTitle}</h1>

            {/* <div className="pd-accent" /> */}

            <div className="pd-meta">
              {/* <span className="pd-badge">{catLabel}</span> */}

              {dateStr && (
                <span className="pd-date">
                  <FaCalendarAlt />
                  {dateStr}
                </span>
              )}
            </div>
          </div>

          {/* ── Main content ── */}
          <div className="pd-content">{renderContent(post)}</div>
        </div>
      </div>
    </main>
  );
};

export default PostDetailPage;
