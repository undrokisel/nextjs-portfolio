"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ title, date, summary, imageUrl, slug }) => (
  <div className="bg-[#181818] rounded-lg border border-[#33353F] overflow-hidden hover:border-purple-500 transition-all">
    <div className="relative h-48 w-full">
      <Image
        src={imageUrl}
        alt={title}
        fill
        style={{ objectFit: 'cover' }}
      />
    </div>
    <div className="p-6">
      <p className="text-purple-500 text-sm mb-2">{date}</p>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-[#ADB7BE]">{summary}</p>
      <Link href={`/blog/${slug}`}>
        <button className="mt-4 text-purple-500 hover:text-purple-400 transition-colors">
          Читать далее →
        </button>
      </Link>
    </div>
  </div>
);

const BlogPage = () => {
  const blogPosts = [
    {
      title: "React Server Components: Будущее React-разработки",
      date: "1 февраля 2025",
      summary: "Обзор новых возможностей React Server Components и их влияние на производительность современных веб-приложений.",
      imageUrl: "/images/blog/react-server.png",
      slug: "react-server-components"
    },
    {
      title: "TypeScript 5.4: Что нового?",
      date: "2 февраля 2025",
      summary: "Разбор ключевых особенностей и улучшений в последней версии TypeScript, включая новые типы и оптимизации.",
      imageUrl: "/images/blog/typescript.png",
      slug: "typescript-5-4"
    },
    {
      title: "Оптимизация производительности Next.js приложений",
      date: "3 февраля 2025",
      summary: "Практические советы по улучшению производительности и оптимизации Next.js приложений.",
      imageUrl: "/images/blog/nextjs-perf.png",
      slug: "nextjs-optimization"
    },
  ];

  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mx-auto px-12 py-4 mt-24">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Наш блог</h1>
          <p className="text-[#ADB7BE] text-xl">
            Последние новости и статьи о фронтенд-разработке
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard
              key={index}
              title={post.title}
              date={post.date}
              summary={post.summary}
              imageUrl={post.imageUrl}
              slug={post.slug}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default BlogPage; 