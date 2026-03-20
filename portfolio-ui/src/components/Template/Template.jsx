import { Outlet, NavLink } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import logo from "../../assets/logo.svg";
import Navbar from "./Navbar";

export default function Template() {
  const { t: translation, i18n: i18nInstance } = useTranslation();

  const [lang, setLang] = useState(() => {
    try {
      const saved = localStorage.getItem("lang");
      if (saved) return saved;
      return (i18nInstance?.language || "es").toUpperCase();
    } catch (e) {
      return "ES";
    }
  });

  const [hovered, setHovered] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobile = () => setMobileOpen((v) => !v);

  useEffect(() => {
    try {
      localStorage.setItem("lang", lang);
    } catch (e) {
      // ignore
    }
    const lower = lang.toLowerCase();
    if (i18nInstance && i18nInstance.changeLanguage)
      i18nInstance.changeLanguage(lower);
    if (typeof document !== "undefined") document.documentElement.lang = lower;
  }, [lang, i18nInstance]);

  const toggleLang = () => setLang((p) => (p === "ES" ? "EN" : "ES"));

  return (
    <div className="flex flex-col min-h-screen text-base">
      <header className="flex-none h-17.5 bg-brand-dark text-on-brand-dark flex items-center header-bottom-accent">
        <div className="w-full max-w-5xl mx-auto px-4">
          <nav className="relative flex items-center justify-between py-3">
            <div className="logo">
              <NavLink to="/" aria-label="Home">
                <img src={logo} alt="Logo" className="h-10 w-auto" />
              </NavLink>
            </div>
            <Navbar className="hidden lg:flex gap-6 items-center text-sm" />
            <div className="flex items-center gap-3">
              <button
                type="button"
                className="lg:hidden p-2 rounded bg-transparent border border-white/10 text-white hover:bg-white/5"
                onClick={toggleMobile}
                aria-expanded={mobileOpen}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden
                >
                  <path
                    d="M4 6h16M4 12h16M4 18h16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                type="button"
                aria-label={translation("lang.change", { lang })}
                onClick={toggleLang}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className={`bg-transparent border border-white/20 px-3 py-1 rounded text-sm hover:bg-white/10 transition-colors duration-150 ${hovered ? "text-accent-red" : "text-white"}`}
              >
                {lang}
              </button>
            </div>
            {mobileOpen && (
              <div className="lg:hidden absolute left-0 top-full w-full bg-(--brand-darker) text-white shadow-md z-40">
                <Navbar
                  vertical={true}
                  onLinkClick={() => setMobileOpen(false)}
                  className="flex flex-col gap-2 p-4 text-sm"
                />
              </div>
            )}
          </nav>
        </div>
      </header>

      <main className="flex-1 overflow-auto bg-(--brand-dark) text-white">
        <div className="w-full max-w-5xl mx-auto px-4">
          <Outlet />
        </div>
      </main>

      <footer className="flex-none h-12.5 bg-footer text-white flex items-center">
        <div className="w-full max-w-5xl mx-auto px-4 text-center text-[0.75rem]">
          {translation("footer.credit")}
        </div>
      </footer>
    </div>
  );
}
