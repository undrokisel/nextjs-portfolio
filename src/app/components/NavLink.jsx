"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, title }) => {
  const pathname = usePathname();
  
  // Проверяем, является ли текущий путь активным
  const isActive = pathname === href || 
    (href !== "/" && pathname.startsWith(href)) || 
    (href.startsWith("#") && pathname === "/" && document.querySelector(href));

  return (
    <Link
      href={href}
      className={`block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white
        ${isActive ? "text-white font-bold border-b-2 border-purple-500" : ""}`}
    >
      {title}
    </Link>
  );
};

export default NavLink;
