"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";
import { motion } from "framer-motion";
import ProjectsSection from "../components/ProjectsSection";

const AndreyPage = () => {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mx-auto px-12 py-4">
        <div 
        className="gap-8 flex flex-wrap justify-center items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16"
        >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-1 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] relative">
            <Image
              src="/images/persons/dima.jpg"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
              width={300}
              height={300}

            />
          </div>
        </motion.div>

          <div className="mt-4 md:mt-0 text-white">
            <h1 className="text-4xl font-bold mb-4">Дмитрий</h1>
            <p className="text-base lg:text-lg mb-6">
            Меня зовут Дима, я студент группы 2-ИС. Имею навыки в разработке на JS, PHP, Vue и React. Занимаюсь музыкой и графическим дизайном.
            </p>
            <div className="bg-[#181818] p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Мой стек технологий:</h2>
              <ul className="list-disc pl-6">
                <li>React & Next.js</li>
                <li>Figma</li>
                <li>Laravel</li>
              </ul>
            </div>
          </div>
        </div>

        <ProjectsSection owner="Dima" />
      </div>
    </main>

  );
};

export default AndreyPage; 