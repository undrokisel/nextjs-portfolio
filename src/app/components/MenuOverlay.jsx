import React from "react";
import NavLink from "./NavLink";

const MenuOverlay = ({ links }) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
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
  );
};

export default MenuOverlay;
