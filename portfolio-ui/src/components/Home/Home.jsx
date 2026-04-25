import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

export default function Home() {
  const { t: translate } = useTranslation();

  return (
    <div className="flex flex-col lg:flex-row lg:justify-center items-center w-full">
      <div className="w-full h-1/2 flex-1 p-2 mt-12 flex items-center justify-center">
        <div className="w-64 sm:w-80 md:w-96 aspect-square neon-wrap">
          <img
            src={`${import.meta.env.VITE_PROFILE_IMG}/aboutme.jpg`}
            alt={translate("nav.home")}
            className="w-full h-full rounded-full object-cover shadow-md shadow-black/25 "
          />
        </div>
      </div>
      <div className="flex flex-col w-full flex-1 justify-start items-center lg:items-start gap-2 px-5 mt-4">
        <div className="font-bold text-[3rem] md:text-[5rem] sm:text-[3rem] text-shadow-strong">
          <span className="mr-3">{translate("home.greeting")}</span>
          <span className="text-(--accent-red) ">{translate("home.name")}</span>
        </div>
        <div className="text-[1rem] sm:text-[1.5rem] md:text-[2rem] text-center lg:text-left">
          <span>{translate("home.description")}</span>
        </div>
        <div className="mt-2">
          <NavLink
            to="/contact-me"
            className="px-6 py-2 border border-(--accent-red) bg-brand-dark text-(--accent-red) rounded hover:opacity-90 inline-block text-[1.5rem] btn-animated btn-glow"
          >
            {translate("home.contact")}
          </NavLink>
        </div>
      </div>
    </div>
  );
}
