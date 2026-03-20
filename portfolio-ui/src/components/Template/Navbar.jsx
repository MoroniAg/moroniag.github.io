import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Navbar({
  onLinkClick,
  vertical = false,
  className = "",
}) {
  const { t: translation } = useTranslation();

  const hoverShade = "hover:bg-white/5 lg:hover:bg-transparent";
  const linkClass = (isActive) =>
    vertical
      ? isActive
        ? `text-accent-red block py-2 ${hoverShade} rounded`
        : `block py-2 ${hoverShade} rounded`
      : isActive
        ? `text-accent-red text-[1rem] ${hoverShade} px-1 rounded`
        : `text-[1rem] ${hoverShade} px-1 rounded`;

  return (
    <ul className={className}>
      <li>
        <NavLink
          to="/"
          onClick={onLinkClick}
          className={({ isActive }) => linkClass(isActive)}
        >
          {translation("nav.home")}
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about-me"
          onClick={onLinkClick}
          className={({ isActive }) => linkClass(isActive)}
        >
          {translation("nav.about")}
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/experience"
          onClick={onLinkClick}
          className={({ isActive }) => linkClass(isActive)}
        >
          {translation("nav.experience")}
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/technologies"
          onClick={onLinkClick}
          className={({ isActive }) => linkClass(isActive)}
        >
          {translation("nav.technologies")}
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact-me"
          onClick={onLinkClick}
          className={({ isActive }) => linkClass(isActive)}
        >
          {translation("nav.contact")}
        </NavLink>
      </li>
    </ul>
  );
}
