import { Outlet, NavLink } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import logo from "../../assets/logo.svg";

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
          <nav className="flex items-center justify-between py-3">
            <div className="logo">
              <img src={logo} alt="Logo" className="h-10 w-auto" />
            </div>

            <ul className="hidden md:flex gap-6 items-center text-sm">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-accent-red text-[1rem]" : "text-[1rem]"
                  }
                >
                  {translation("nav.home")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about-me"
                  className={({ isActive }) =>
                    isActive ? "text-accent-red text-[1rem]" : "text-[1rem]"
                  }
                >
                  {translation("nav.about")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/experience"
                  className={({ isActive }) =>
                    isActive ? "text-accent-red text-[1rem]" : "text-[1rem]"
                  }
                >
                  {translation("nav.experience")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/technologies"
                  className={({ isActive }) =>
                    isActive ? "text-accent-red text-[1rem]" : "text-[1rem]"
                  }
                >
                  {translation("nav.technologies")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact-me"
                  className={({ isActive }) =>
                    isActive ? "text-accent-red text-[1rem]" : "text-[1rem]"
                  }
                >
                  {translation("nav.contact")}
                </NavLink>
              </li>
            </ul>

            <div className="flex items-center gap-3">
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
