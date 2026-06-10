"use client";
import HeroSection from "@/components/About/heroSection";
import React, { useEffect, useState } from "react";
import "./resources.css";
import Container from "@/components/home/container";
import {
  cardData,
  Recent_Article_Data,
  Today_Trending_Data,
} from "@/data/Resouces";
import Image from "next/image";
import img1 from "../../public/img/Resources/hospital_4340965 1 (1).png";
import { FaSearch } from "react-icons/fa";
interface Post {
  _id: string;
  title: string;
  slug: string;
  category: string;
  contentHtml?: string;
  coverImage?: string;
  createdAt?: string;
}
const Resources = () => {
  // const [search, setSearch] = useState("");

  const [search, setSearch] = useState("");
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  // Fetch posts from API
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/posts`,
        );
        const data = await res.json();

        if (res.ok) {
          // Agar tum sirf news category chahte ho:
          const newsPosts = data.data.filter(
            (post: Post) => post.category === "news",
          );

          setPosts(newsPosts);
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);
  // Filter Logic
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase()),
  );
  return (
    <>
      <div>
        <HeroSection
          clasName="resources-hero"
          text="Resources"
          mainText="Resources"
          pageLink="/resources"
        />
      </div>

      <div className="-mt-10 z-40 relative">
        <Container>
          <div className="flex flex-wrap gap-4 justify-center">
            {cardData.map((item, index) => (
              <div
                key={index}
                className=" group flex gap-3 text-[#4A4A4ACC]  items-center py-6 px-5 bg-white rounded-lg w-52 cursor-pointer shadow-md hover:bg-[#BA0C2F] hover:text-white"
              >
                <div className="relative w-10 h-10 flex-shrink-0">
                  {/* Default Image */}
                  <Image
                    src={Object.values(item.card_image)[0]}
                    alt={item.card_title}
                    className="absolute inset-0 group-hover:opacity-0 transition duration-300"
                  />

                  {/* Hover Image */}
                  <Image
                    src={Object.values(item.hover_image)[0]}
                    alt={item.card_title}
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300"
                  />
                </div>

                <h1 className=" font-normal font-futura uppercase ">
                  {item.card_title}
                </h1>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Today Trending */}
      <div className="py-12">
        <Container>
          <h1 className="font-futura text-[#4A4A4A] text-3xl py-8 font-bold">
            Today Trending
          </h1>
          <div className="flex gap-4 rounded-2xl">
            {Today_Trending_Data.map((item, index) => {
              return (
                <div key={index}>
                  <div>
                    <Image
                      src={Object.values(item.Today_Trending_Iamge)[0]}
                      alt=""
                      className="rounded-2xl"
                    />
                  </div>
                  <div className="pt-4">
                    <h1 className="font-futura text-[#4A4A4A] font-semibold text-lg">
                      {item.Today_Trending_description}
                    </h1>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </div>
      {/* Recent Article For You */}
      <div className="my-10">
        <Container>
          <div>
            <div className="py-4 flex justify-between items-center ">
              <h1 className="font-futura text-[#4A4A4A] text-3xl py-8 font-bold">
                Recent Article For You
              </h1>
              {/* <input type="text" placeholder="Search" /> */}
              {/* Search Input */}
              <div className="relative w-full md:w-120 md:relative">
                <input
                  type="text"
                  placeholder="Search article..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full px-5 py-3 rounded-full border border-gray-300 
                           focus:outline-none focus:ring-2 focus:ring-red-500 
                           font-futura"
                />
                <FaSearch className="absolute right-4 top-5 text-[#4A4A4A]" />
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {loading ? (
                <p>Loading...</p>
              ) : (
                filteredPosts.map((post) => (
                  <div key={post._id}>
                    <div className=" h-64 relative">
                      <Image
                        src={post.coverImage || img1}
                        alt={post.title}
                        // width={400}
                        // height={250}
                        fill
                        className="rounded-xl object-cover"
                      />
                    </div>

                    <div className="py-6">
                      <h1 className="font-futura text-lg font-semibold">
                        {post.title}
                      </h1>

                      <p className="font-futura text-sm font-normal pt-2 line-clamp-3">
                        {post.contentHtml
                          ? post.contentHtml
                              .replace(/<[^>]+>/g, "")
                              .slice(0, 100) + "..."
                          : ""}
                      </p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Resources;
