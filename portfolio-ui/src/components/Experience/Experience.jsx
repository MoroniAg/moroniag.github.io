import React from "react";
import CardExperience from "./CardExperience";

export default function Experience() {
  return (
    <div className="flex flex-col justify-center items-center gap-4 mt-16 mb-8 w-full h-full">
      <CardExperience />
      <CardExperience />
      <CardExperience />
    </div>
  );
}
