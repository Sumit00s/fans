"use client";
import Link from "next/link";
import { useState } from "react";

export default function TopVideos() {
  const TOPVIDEOS = [
    { id: 1, image_url: "/banners/banner1.png", video_url: "/intros/intro1.mp4" },
    { id: 2, image_url: "/banners/banner2.png", video_url: "/intros/intro2.mp4" },
    { id: 3, image_url: "/banners/banner3.png", video_url: "/intros/intro3.mp4" },
    { id: 4, image_url: "/banners/banner4.png", video_url: "/intros/intro4.mp4" },
    { id: 5, image_url: "/banners/banner5.png", video_url: "/intros/intro5.mp4" },
    { id: 6, image_url: "/banners/banner6.png", video_url: "/intros/intro6.mp4" },
  ];

  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className="px-4 sm:px-6 lg:px-20">
      <h1 className="font-bold text-white text-3xl text-center my-5">
        <span className="text-pink-500">Top</span> Videos
      </h1>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {TOPVIDEOS.map((item) => (
          <div
            key={item.id}
            className="w-full cursor-pointer"
            onMouseEnter={() => setHoveredId(item.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <Link href={`/${item.id}`}>
              {hoveredId === item.id ? (
                <video
                  src={item.video_url}
                  autoPlay
                  muted
                  loop
                  className="w-full h-auto rounded"
                />
              ) : (
                <img
                  src={item.image_url}
                  alt={`Banner ${item.id}`}
                  className="w-full h-auto rounded"
                />
              )}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
