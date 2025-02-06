"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Next</li>
      </ul>
    ),
  },
 
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">О нас</h2>
          <p className="text-base lg:text-lg">
            Мы разработчики полного цикла с опытом создания веб-приложений
            с использованием JavaScript, React, Vue3, Node.js, PHP, Laravel, 
            и других технологий. Мы вдохновляемся современными технологиями и сложными задачами. Наша цель - приносить добро через улучшение пользовательского опыта и создания функциональных приложений
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton 
              selectTab={() => handleTabChange("навыки")} 
              active={tab === "навыки"}
            >
              Навыки
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
