"use client";

import HeroSection from "@/components/About/heroSection";
import Container from "@/components/home/container";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import {
  FaCalendarAlt,
  FaChevronDown,
  FaChevronUp,
  FaDownload,
  FaFileAlt,
  FaImages,
  FaMicrophone,
  FaNewspaper,
  FaPlay,
  FaSearch,
  FaVolumeUp,
} from "react-icons/fa";
import "./resources.css";

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
  status?: string;
  publishedAt?: string;
  createdAt?: string;
};

type MainTabKey =
  | "news"
  | "media_kit"
  | "interview"
  | "partnership"
  | "event"
  | "policyholder_info";

type MediaKitTabKey =
  | "commercial"
  | "radio"
  | "press_advertisement"
  | "outdoor"
  | "other_campaign";

const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL?.includes("/api/v1")
  ? `${process.env.NEXT_PUBLIC_API_BASE_URL}/posts`
  : `${
      process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000/api/v1"
    }/posts`;

const mainTabs: {
  key: MainTabKey;
  label: string;
  icon: ReactNode;
}[] = [
  { key: "news", label: "News", icon: <FaNewspaper /> },
  { key: "media_kit", label: "Media Kit", icon: <FaImages /> },
  { key: "interview", label: "Interviews", icon: <FaPlay /> },
  { key: "partnership", label: "Partnerships", icon: <FaNewspaper /> },
  { key: "event", label: "Events", icon: <FaCalendarAlt /> },
  {
    key: "policyholder_info",
    label: "Policyholder Info",
    icon: <FaDownload />,
  },
];

const mediaKitTabs: {
  key: MediaKitTabKey;
  label: string;
  icon: ReactNode;
}[] = [
  { key: "commercial", label: "Commercials", icon: <FaPlay /> },
  { key: "radio", label: "Radio", icon: <FaMicrophone /> },
  { key: "press_advertisement", label: "Press Ads", icon: <FaFileAlt /> },
  { key: "outdoor", label: "Outdoor", icon: <FaImages /> },
  { key: "other_campaign", label: "Other Campaigns", icon: <FaImages /> },
];

const stripHtml = (html = "") => {
  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
};

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

const getYoutubeEmbedUrl = (url: string) => {
  try {
    const parsed = new URL(url);

    if (parsed.hostname.includes("youtu.be")) {
      const id = parsed.pathname.replace("/", "");
      return `https://www.youtube.com/embed/${id}`;
    }

    if (parsed.hostname.includes("youtube.com")) {
      const id = parsed.searchParams.get("v");
      if (id) return `https://www.youtube.com/embed/${id}`;
    }

    return url;
  } catch {
    return url;
  }
};

const Resources = () => {
  const [activeMainTab, setActiveMainTab] = useState<MainTabKey>("news");
  const [activeMediaKitTab, setActiveMediaKitTab] =
    useState<MediaKitTabKey>("commercial");

  const [search, setSearch] = useState("");
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedPostId, setExpandedPostId] = useState<string | null>(null);

  useEffect(() => {
    const fetchMediaCenterPosts = async () => {
      try {
        const res = await fetch(API_URL, {
          cache: "no-store",
        });

        const json = await res.json();

        if (!res.ok) {
          console.error("Posts API error:", json);
          return;
        }

        setPosts(Array.isArray(json?.data) ? json.data : []);
      } catch (error) {
        console.error("Error fetching Media Center posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMediaCenterPosts();
  }, []);

  useEffect(() => {
    setExpandedPostId(null);
  }, [activeMainTab, activeMediaKitTab, search]);

  const filteredPosts = useMemo(() => {
    return posts
      .filter((post) => {
        if (activeMainTab === "media_kit") {
          return (
            post.category === "media_kit" &&
            post.subCategory === activeMediaKitTab
          );
        }

        return post.category === activeMainTab;
      })
      .filter((post) => {
        const keyword = search.toLowerCase().trim();
        if (!keyword) return true;

        return (
          post.title?.toLowerCase().includes(keyword) ||
          post.category?.toLowerCase().includes(keyword) ||
          post.subCategory?.toLowerCase().includes(keyword) ||
          stripHtml(post.contentHtml).toLowerCase().includes(keyword)
        );
      });
  }, [posts, activeMainTab, activeMediaKitTab, search]);

  const currentTitle =
    activeMainTab === "media_kit"
      ? mediaKitTabs.find((tab) => tab.key === activeMediaKitTab)?.label
      : mainTabs.find((tab) => tab.key === activeMainTab)?.label;

  const renderVideos = (links: string[] = []) => {
    if (!links.length) return null;

    return (
      <div className="resource-video-grid">
        {links.map((link, index) => (
          <div className="resource-video-card" key={`${link}-${index}`}>
            <iframe
              src={getYoutubeEmbedUrl(link)}
              title={`Video ${index + 1}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ))}
      </div>
    );
  };

  const renderCommercial = (post: Post) => {
    if (post.videoGroups?.length) {
      return (
        <div className="resource-group-list">
          {post.videoGroups.map((group, index) => (
            <div className="resource-group-box" key={`${group.title}-${index}`}>
              <h3>{group.title}</h3>
              {renderVideos(group.youtubeLinks)}
            </div>
          ))}
        </div>
      );
    }

    return renderVideos(post.youtubeLinks || []);
  };

  const renderRadio = (post: Post) => {
    if (!post.audioGroups?.length) return null;

    return (
      <div className="resource-audio-list">
        {post.audioGroups.map((group, index) => (
          <div className="resource-audio-group" key={`${group.title}-${index}`}>
            <h3>{group.title}</h3>

            {(group.audios || []).map((audio, audioIndex) => (
              <div
                className="resource-audio-card"
                key={`${audio.url}-${audioIndex}`}
              >
                <div className="resource-audio-icon">
                  <FaVolumeUp />
                </div>

                <div className="resource-audio-player">
                  <p>{audio.originalName || `Audio ${audioIndex + 1}`}</p>
                  <audio controls src={audio.url} />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  };

  const renderPressAds = (post: Post) => {
    if (!post.additionalImages?.length) return null;

    return (
      <div className="resource-image-grid">
        {post.additionalImages.map((img, index) => (
          <a
            href={img.url}
            target="_blank"
            rel="noopener noreferrer"
            className="resource-image-card"
            key={`${img.url}-${index}`}
          >
            <Image
              src={img.url}
              alt={img.originalName || post.title}
              fill
              sizes="(max-width: 768px) 100vw, 350px"
              className="resource-gallery-img"
            />
          </a>
        ))}
      </div>
    );
  };

  const renderOutdoor = (post: Post) => {
    if (!post.imageGroups?.length) return null;

    return (
      <div className="resource-group-list">
        {post.imageGroups.map((group, index) => (
          <div className="resource-group-box" key={`${group.title}-${index}`}>
            <h3>{group.title}</h3>

            <div className="resource-image-grid">
              {(group.images || []).map((img, imgIndex) => (
                <a
                  href={img.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resource-image-card"
                  key={`${img.url}-${imgIndex}`}
                >
                  <Image
                    src={img.url}
                    alt={img.originalName || group.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 350px"
                    className="resource-gallery-img"
                  />
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderHtml = (post: Post) => {
    if (!post.contentHtml) return null;

    return (
      <div
        className="resource-html"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    );
  };

  const renderPolicyholderInfo = (post: Post) => {
    if (!post.pdfUrl) return null;

    return (
      <a
        href={post.pdfUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="resource-pdf-btn"
      >
        <FaDownload />
        Download Policyholder Document
      </a>
    );
  };

  const renderEmptyDetails = () => {
    return (
      <div className="resource-empty-detail">
        No detailed content available for this item.
      </div>
    );
  };

  const renderDetails = (post: Post) => {
    if (post.category === "media_kit") {
      if (post.subCategory === "commercial")
        return renderCommercial(post) || renderEmptyDetails();
      if (post.subCategory === "radio")
        return renderRadio(post) || renderEmptyDetails();
      if (post.subCategory === "press_advertisement")
        return renderPressAds(post) || renderEmptyDetails();
      if (post.subCategory === "outdoor")
        return renderOutdoor(post) || renderEmptyDetails();
      if (post.subCategory === "other_campaign")
        return renderHtml(post) || renderEmptyDetails();
    }

    if (post.category === "interview") {
      return renderVideos(post.youtubeLinks || []) || renderEmptyDetails();
    }

    if (post.category === "policyholder_info") {
      return renderPolicyholderInfo(post) || renderEmptyDetails();
    }

    return renderHtml(post) || renderEmptyDetails();
  };

  return (
    <>
      <HeroSection
        clasName="resources-hero"
        text="Resources"
        mainText="Resources"
        pageLink="/resources"
      />

      <div className="resources-main-tabs-wrap">
        <Container>
          <div className="resources-main-tabs-box">
            {mainTabs.map((tab) => (
              <button
                key={tab.key}
                type="button"
                onClick={() => {
                  setActiveMainTab(tab.key);

                  if (tab.key === "media_kit") {
                    setActiveMediaKitTab("commercial");
                  }
                }}
                className={`resources-main-tab ${
                  activeMainTab === tab.key ? "active" : ""
                }`}
              >
                <span>{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </Container>
      </div>

      <section className="resources-api-section">
        <Container>
          <div className="resources-top-row">
            <div>
              <span>Media Center</span>
              <h1>{currentTitle}</h1>
              <p>
                Explore Jubilee General news, campaigns, interviews,
                partnerships, events and policyholder information.
              </p>
            </div>

            <div className="resources-search">
              <FaSearch />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search resources..."
              />
            </div>
          </div>

          {activeMainTab === "media_kit" && (
            <div className="resources-sub-tabs">
              {mediaKitTabs.map((tab) => (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveMediaKitTab(tab.key)}
                  className={`resources-sub-tab ${
                    activeMediaKitTab === tab.key ? "active" : ""
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>
          )}

          <div className="resources-section-title">
            <h2>{currentTitle}</h2>
            <span>{filteredPosts.length} item(s)</span>
          </div>

          {loading ? (
            <div className="resources-state-box">Loading API data...</div>
          ) : filteredPosts.length === 0 ? (
            <div className="resources-state-box">
              No data found for this section.
            </div>
          ) : (
            <div className="resources-api-list">
              {filteredPosts.map((post) => {
                const isExpanded = expandedPostId === post._id;

                return (
                  <article
                    className={`resource-api-card ${isExpanded ? "is-expanded" : ""}`}
                    key={post._id}
                  >
                    <div className="resource-card-cover">
                      {post.coverImage ? (
                        <Image
                          src={post.coverImage}
                          alt={post.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 420px"
                          className="resource-card-cover-img"
                        />
                      ) : (
                        <div className="resource-no-image">
                          <span>{post.category.replaceAll("_", " ")}</span>
                          <strong>No Image Available</strong>
                        </div>
                      )}
                    </div>

                    <div className="resource-content">
                      <div className="resource-meta">
                        <span>{post.category.replaceAll("_", " ")}</span>

                        {post.subCategory && (
                          <span>{post.subCategory.replaceAll("_", " ")}</span>
                        )}

                        {formatDate(post.publishedAt || post.createdAt) && (
                          <span>
                            <FaCalendarAlt />
                            {formatDate(post.publishedAt || post.createdAt)}
                          </span>
                        )}
                      </div>

                      <h2>{post.title}</h2>

                      <button
                        type="button"
                        className={`resource-view-btn ${isExpanded ? "active" : ""}`}
                        aria-expanded={isExpanded}
                        onClick={() =>
                          setExpandedPostId((currentId) =>
                            currentId === post._id ? null : post._id,
                          )
                        }
                      >
                        {isExpanded ? "Show Less" : "Read More"}
                        {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
                      </button>

                      {isExpanded && (
                        <div className="resource-details-panel">
                          <div className="resource-details-heading">
                            <span>Details</span>
                            <p>{post.title}</p>
                          </div>

                          <div className="resource-dynamic-content">
                            {renderDetails(post)}
                          </div>
                        </div>
                      )}
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
