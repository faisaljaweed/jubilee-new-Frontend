/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import HeroSection from "@/components/About/heroSection";
import Container from "@/components/home/container";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import {
  FaArrowRight,
  FaCalendarAlt,
  FaImages,
  FaNewspaper,
  FaPlay,
  FaSearch,
  FaTimes,
} from "react-icons/fa";
import "./resources.css";

// ─── Types ────────────────────────────────────────────────────────────────────

type Post = {
  _id: string;
  category: string;
  subCategory: string | null;
  title: string;
  slug: string;
  contentHtml?: string;
  coverImage?: string;
  youtubeLinks?: string[];
  videoGroups?: unknown[];
  audioGroups?: unknown[];
  additionalImages?: unknown[];
  imageGroups?: unknown[];
  pdfUrl?: string;
  publishedAt?: string;
  createdAt?: string;
};

type MainTabKey = "news_events" | "media_kit" | "interview";

// ─── Constants ────────────────────────────────────────────────────────────────

const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL?.includes("/api/v1")
  ? `${process.env.NEXT_PUBLIC_API_BASE_URL}/posts`
  : `${
      process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000/api/v1"
    }/posts`;

const MAIN_TABS: { key: MainTabKey; label: string; icon: ReactNode }[] = [
  { key: "news_events", label: "News & Events", icon: <FaNewspaper /> },
  { key: "media_kit", label: "Media Kit", icon: <FaImages /> },
  { key: "interview", label: "Interviews", icon: <FaPlay /> },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

const stripHtml = (html = "") =>
  html
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const formatDate = (date?: string) => {
  if (!date) return "";
  const d = new Date(date);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
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

const getCategoryLabel = (cat: string, sub?: string | null): string => {
  const normalizedSub = normalizeKey(sub);

  if (cat === "media_kit" && normalizedSub) {
    const map: Record<string, string> = {
      commercial: "Commercial",
      radio: "Radio",
      press_advertisement: "Press Ad",
      outdoor: "Outdoor Commercials",
      outdoor_commercials: "Outdoor Commercials",
      other_campaign: "Campaign",
    };

    return map[normalizedSub] ?? normalizedSub.replaceAll("_", " ");
  }

  const map: Record<string, string> = {
    news: "News",
    event: "Event",
    media_kit: "Media Kit",
    interview: "Interview",
  };

  return map[cat] ?? cat.replaceAll("_", " ");
};

const getCardCta = (tab: MainTabKey): string => {
  if (tab === "interview") return "Watch Now";
  if (tab === "media_kit") return "View Details";
  return "Read More";
};

// ─── Component ────────────────────────────────────────────────────────────────

const Resources = () => {
  const [activeTab, setActiveTab] = useState<MainTabKey>("news_events");
  const [search, setSearch] = useState("");
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(API_URL, { cache: "no-store" });
        const json = await res.json();

        if (!res.ok) {
          console.error("Posts API:", json);
          return;
        }

        setPosts(Array.isArray(json?.data) ? json.data : []);
      } catch (err) {
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  useEffect(() => {
    setSearch("");
  }, [activeTab]);

  const filteredPosts = useMemo(() => {
    return posts
      .filter((p) => {
        if (activeTab === "news_events")
          return p.category === "news" || p.category === "event";

        if (activeTab === "media_kit") return p.category === "media_kit";

        return p.category === activeTab;
      })
      .filter((p) => {
        const kw = search.toLowerCase().trim();

        if (!kw) return true;

        return (
          p.title?.toLowerCase().includes(kw) ||
          p.subCategory?.toLowerCase().includes(kw) ||
          stripHtml(p.contentHtml).toLowerCase().includes(kw)
        );
      });
  }, [posts, activeTab, search]);

  return (
    <>
      {/* Hero */}
      <HeroSection
        clasName="resources-hero"
        text="Resources"
        mainText="Resources"
        pageLink="/resources"
      />

      {/* ── Content Section ──────────────────────────────────────────────── */}
      <section className="res-content-section">
        <Container>
          {/* ── Top bar: tabs + search side by side ── */}
          <div className="res-top-bar">
            <div className="res-tabs">
              {MAIN_TABS.map((tab) => (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveTab(tab.key)}
                  className={`res-tab-btn${
                    activeTab === tab.key ? " is-active" : ""
                  }`}
                >
                  <span className="res-tab-icon">{tab.icon}</span>
                  <span className="res-tab-label">{tab.label}</span>
                </button>
              ))}
            </div>

            <div className="res-search-box">
              <FaSearch className="res-search-icon" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search resources…"
                className="res-search-input"
              />

              {search && (
                <button
                  type="button"
                  className="res-search-clear"
                  onClick={() => setSearch("")}
                  aria-label="Clear"
                >
                  <FaTimes />
                </button>
              )}
            </div>
          </div>

          <div className="res-bar-divider" />

          {search && (
            <p className="res-search-count">
              {filteredPosts.length} result
              {filteredPosts.length !== 1 ? "s" : ""} for &ldquo;{search}
              &rdquo;
            </p>
          )}

          {/* ── States & Grid ── */}
          {loading ? (
            <div className="res-state-box">
              <div className="res-spinner" />
              <p>Loading content…</p>
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="res-state-box">
              <FaSearch className="res-empty-icon" />
              <p>
                No results found
                {search ? ` for "${search}"` : " in this section"}.
              </p>
            </div>
          ) : (
            <div className="res-card-grid">
              {filteredPosts.map((post) => {
                const excerpt = stripHtml(post.contentHtml);
                const dateStr = formatDate(post.publishedAt ?? post.createdAt);
                const catLabel = getCategoryLabel(
                  post.category,
                  post.subCategory,
                );
                const displayTitle = getDisplayTitle(post);
                const cta = getCardCta(activeTab);

                return (
                  <article
                    className={`res-card${
                      activeTab !== "news_events" ? " res-card-compact" : ""
                    }`}
                    key={post._id}
                  >
                    {/* Cover */}
                    <div className="res-card-cover">
                      {post.coverImage ? (
                        <Image
                          src={post.coverImage}
                          alt={displayTitle}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1100px) 50vw, 33vw"
                          className="res-card-img"
                        />
                      ) : (
                        <div className="res-card-no-img">
                          <FaImages />
                          <span>{catLabel}</span>
                        </div>
                      )}

                      <span className="res-card-badge">{catLabel}</span>
                    </div>

                    {/* Body */}
                    <div className="res-card-body">
                      {dateStr && (
                        <div className="res-card-date">
                          <FaCalendarAlt />
                          {dateStr}
                        </div>
                      )}

                      <h3 className="res-card-title">{displayTitle}</h3>

                      {excerpt && (
                        <p className="res-card-excerpt">
                          {excerpt.length > 110
                            ? `${excerpt.slice(0, 110)}…`
                            : excerpt}
                        </p>
                      )}

                      <Link
                        href={`/resources/${post._id}`}
                        className="res-card-cta"
                      >
                        {cta} <FaArrowRight />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </Container>
      </section>
    </>
  );
};

export default Resources;
