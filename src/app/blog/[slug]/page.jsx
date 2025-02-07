"use client";
import React from "react";
import Navbar from "../../components/Navbar";
import Image from "next/image";
import { useParams } from "next/navigation";
import Link from "next/link";

const blogPosts = {
  "react-server-components": {
    title: "React Server Components: Будущее React-разработки",
    date: "1 февраля 2025",
    imageUrl: "/images/blog/react-server.png",
    content: `
      <h2>Революция в мире React</h2>
      <p>React Server Components (RSC) представляют собой революционный подход к разработке React-приложений, 
      который обещает значительно улучшить производительность и упростить разработку.</p>

      <h3>Ключевые преимущества RSC:</h3>
      <ul>
        <li>Нулевой размер JavaScript-бандла для серверных компонентов</li>
        <li>Автоматическая оптимизация производительности</li>
        <li>Улучшенная безопасность данных</li>
        <li>Более простая интеграция с бэкендом</li>
      </ul>

      <h3>Как это работает?</h3>
      <p>Server Components позволяют React-компонентам выполняться непосредственно на сервере, 
      генерируя только необходимый HTML и минимальный JavaScript. Это значительно уменьшает 
      объем кода, который необходимо загружать клиенту.</p>

      <h3>Практическое применение</h3>
      <p>RSC особенно полезны для компонентов, которые:</p>
      <ul>
        <li>Не требуют интерактивности</li>
        <li>Зависят от данных с сервера</li>
        <li>Используют серверные библиотеки</li>
      </ul>

      <h3>Будущее технологии</h3>
      <p>С развитием React Server Components мы можем ожидать появления новых паттернов разработки 
      и инструментов, которые сделают создание веб-приложений еще более эффективным.</p>
    `
  },
  "typescript-5-4": {
    title: "TypeScript 5.4: Что нового?",
    date: "2 февраля 2025",
    imageUrl: "/images/blog/typescript.png",
    content: `
      <h2>Обзор новых возможностей TypeScript 5.4</h2>
      <p>TypeScript 5.4 привносит множество улучшений, которые делают разработку более безопасной и удобной.</p>

      <h3>Основные нововведения:</h3>
      <ul>
        <li>Улучшенный вывод типов в условных выражениях</li>
        <li>Новые утилитные типы</li>
        <li>Оптимизация производительности компилятора</li>
        <li>Улучшенная поддержка ECMAScript декораторов</li>
      </ul>

      <h3>Практические примеры</h3>
      <p>Рассмотрим некоторые новые возможности на практических примерах:</p>
      <pre>
        // Новый синтаксис для условных типов
        type Example = string extends number ? true : false;
        
        // Улучшенная работа с null
        function process(value: string | null) {
          if (value?.length > 5) {
            // TypeScript теперь лучше понимает такие проверки
          }
        }
      </pre>

      <h3>Влияние на разработку</h3>
      <p>Новые возможности TypeScript 5.4 помогают писать более надёжный код и 
      обнаруживать потенциальные ошибки на этапе компиляции.</p>
    `
  },
  "nextjs-optimization": {
    title: "Оптимизация производительности Next.js приложений",
    date: "3 февраля 2025",
    imageUrl: "/images/blog/nextjs-perf.png",
    content: `
      <h2>Ключевые аспекты оптимизации Next.js</h2>
      <p>Оптимизация производительности Next.js приложений требует комплексного подхода 
      и понимания различных аспектов работы фреймворка.</p>

      <h3>Основные направления оптимизации:</h3>
      <ul>
        <li>Оптимизация изображений и мультимедиа</li>
        <li>Эффективное использование серверных компонентов</li>
        <li>Правильная стратегия кэширования</li>
        <li>Оптимизация маршрутизации</li>
      </ul>

      <h3>Практические рекомендации</h3>
      <p>1. Использование Image компонента:</p>
      <pre>
        import Image from 'next/image'
        
        function OptimizedImage() {
          return (
            <Image
              src="/example.jpg"
              alt="Оптимизированное изображение"
              width={800}
              height={600}
              priority
            />
          )
        }
      </pre>

      <h3>Мониторинг производительности</h3>
      <p>Важно регулярно отслеживать метрики производительности вашего приложения:</p>
      <ul>
        <li>First Contentful Paint (FCP)</li>
        <li>Largest Contentful Paint (LCP)</li>
        <li>Time to Interactive (TTI)</li>
        <li>Total Blocking Time (TBT)</li>
      </ul>
    `
  }
};

const BlogPost = () => {
  const params = useParams();
  const post = blogPosts[params.slug];

  if (!post) {
    return (
      <main className="flex min-h-screen flex-col bg-[#121212]">
        <Navbar />
        <div className="container mx-auto px-12 py-4 mt-24">
          <h1 className="text-4xl font-bold text-white mb-4">Статья не найдена</h1>
          <Link href="/blog" className="text-purple-500 hover:text-purple-400">
            ← Вернуться к блогу
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 mt-24">
        <Link href="/blog" className="text-purple-500 hover:text-purple-400 mb-6 inline-block">
          ← Вернуться к блогу
        </Link>
        <article className="prose prose-invert max-w-none">
          <div className="relative h-[400px] w-full mb-8">
            <Image
              src={post.imageUrl}
              alt={post.title}
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-lg"
            />
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">{post.title}</h1>
          <p className="text-purple-500 mb-8">{post.date}</p>
          <div 
            className="text-[#ADB7BE] space-y-4"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </div>
    </main>
  );
};

export default BlogPost; 