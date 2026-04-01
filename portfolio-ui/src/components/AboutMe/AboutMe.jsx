import { useEffect, useState } from "react";
import OutputFormats from "./OutputFormats";
import profileImg from "../../assets/images/profile.png";

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
    <div className="flex flex-col gap-4 lg:h-[calc(100vh-7.5rem)] justify-center items-center ">
      <div className="flex items-center justify-center w-full h-[50%]">
        <img
          src={profileImg}
          alt="Profile"
          className=" h-[50%] md:h-110 lg:h-full rounded-full object-cover"
        />
      </div>
      <div className="flex-none">
        <OutputFormats format={format} />
      </div>
    </div>
  );
}
