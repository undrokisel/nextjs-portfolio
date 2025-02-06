"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";
import LoginModal from "./LoginModal";

const baseNavLinks = [
  {
    title: "Главная",
    path: "/",
  },
  {
    title: "О нас",
    path: "#about",
  },
  {
    title: "Контакты",
    path: "#contact",
  },
  {
    title: "Андрей",
    path: "/dron",
  },
  {
    title: "Дмитрий",
    path: "/dima",
  },
  {
    title: "Евгения",
    path: "/zhenia",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userLogin, setUserLogin] = useState('');

  useEffect(() => {
    // Проверяем авторизацию при загрузке
    const authStatus = localStorage.getItem('isAuthenticated') === 'true';
    const storedLogin = localStorage.getItem('userLogin');
    setIsAuthenticated(authStatus);
    setUserLogin(storedLogin || '');
  }, []);

  const handleLogin = (login) => {
    setIsAuthenticated(true);
    setUserLogin(login);
    setIsLoginModalOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userLogin');
    setIsAuthenticated(false);
    setUserLogin('');
  };

  const navLinks = [
    ...baseNavLinks,
    {
      title: isAuthenticated ? "Выйти" : "Войти",
      path: "#",
      onClick: isAuthenticated ? handleLogout : () => setIsLoginModalOpen(true),
    },
  ];

  return (
    <>
      <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
        <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
          <Link
            href={"/"}
            className="text-2xl md:text-5xl text-white font-semibold"
          >
            <Image src="/images/logo.png" alt="logo" width={100} height={20} />
          </Link>
          <div className="mobile-menu block md:hidden">
            {!navbarOpen ? (
              <button
                onClick={() => setNavbarOpen(true)}
                className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
              >
                <Bars3Icon className="h-5 w-5" />
              </button>
            ) : (
              <button
                onClick={() => setNavbarOpen(false)}
                className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            )}
          </div>
          <div className="menu hidden md:block md:w-auto" id="navbar">
            <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
              {navLinks.map((link, index) => (
                <li key={index}>
                  {link.onClick ? (
                    <button
                      onClick={link.onClick}
                      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
                    >
                      {link.title}
                    </button>
                  ) : (
                    <NavLink href={link.path} title={link.title} />
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
      </nav>

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onLogin={handleLogin}
      />
    </>
  );
};

export default Navbar;
