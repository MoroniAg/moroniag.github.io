import { useEffect, useState } from "react";
import OutputFormats from "./OutputFormats";

export default function AboutMe() {
  const formats = ["java", "python", "html"];
  const [format, setFormat] = useState("java");

  useEffect(() => {
    const interval = setInterval(() => {
      setFormat((prev) => {
        const idx = formats.indexOf(prev);
        return formats[(idx + 1) % formats.length];
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col gap-4 justify-center items-center ">
      <div className="flex items-center justify-center w-full h-[50%] mt-5">
        <img
          src={`${import.meta.env.VITE_PROFILE_IMG}/aboutme.jpg`}
          alt="Profile"
          className=" h-[50%] md:h-[10%] lg:h-75 rounded-full object-cover shadow-md shadow-black/25"
        />
      </div>
      <div className="flex-none mb-5">
        <OutputFormats format={format} />
      </div>
    </div>
  );
}
