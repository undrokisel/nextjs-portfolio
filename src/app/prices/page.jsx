"use client";
import React from "react";
import Navbar from "../components/Navbar";

const PriceCard = ({ title, price, features }) => (
  <div className="bg-[#181818] p-6 rounded-lg border border-[#33353F] hover:border-purple-500 transition-all">
    <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
    <p className="text-purple-500 text-3xl font-bold mb-6">
      от {price} ₽
    </p>
    <ul className="text-[#ADB7BE] space-y-2 mb-6">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center">
          <svg
            className="w-4 h-4 mr-2 text-purple-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
          {feature}
        </li>
      ))}
    </ul>
    <button className="w-full bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600 transition-colors">
      Заказать
    </button>
  </div>
);

const PricesPage = () => {
  const priceCards = [
    {
      title: "Дизайн",
      price: "30 000",
      features: [
        "Уникальный дизайн",
        "Адаптивная верстка",
        "Прототипирование",
        "3 варианта концепции",
        "Исходники в Figma",
        "Правки до полного утверждения"
      ]
    },
    {
      title: "Лендинг",
      price: "45 000",
      features: [
        "Дизайн включен",
        "Адаптивная верстка",
        "SEO-оптимизация",
        "Интеграция с CRM",
        "Установка аналитики",
        "Базовое наполнение контентом"
      ]
    },
    {
      title: "Интернет-магазин",
      price: "150 000",
      features: [
        "Индивидуальный дизайн",
        "Каталог товаров",
        "Корзина и оформление заказа",
        "Личный кабинет",
        "Интеграция с 1С",
        "Платежные системы",
        "Техническая поддержка"
      ]
    }
  ];

  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mx-auto px-12 py-4 mt-24">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Наши цены</h1>
          <p className="text-[#ADB7BE] text-xl">
            Выберите подходящий вариант для вашего проекта
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {priceCards.map((card, index) => (
            <PriceCard
              key={index}
              title={card.title}
              price={card.price}
              features={card.features}
            />
          ))}
        </div>
        <div className="mt-12 text-center text-[#ADB7BE]">
          <p className="mb-4">
            Все цены указаны ориентировочно и могут меняться в зависимости от сложности проекта
          </p>
          <p>
            Для получения точной стоимости свяжитесь с нами для обсуждения деталей
          </p>
        </div>
      </div>
    </main>
  );
};

export default PricesPage; 