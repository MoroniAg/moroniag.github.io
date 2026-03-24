import React from "react";

export default function CardExperience({
  data = {
    company: "test",
    place: "test - test",
    position: "test",
    description:
      "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    labels: ["test", "test", "test"],
    date: "test - test",
  },
  mode = "work",
}) {
  return (
    <>
      <div className="flex flex-row gap-4 bg-(--brand-darker) p-4 rounded-lg">
        <div className="w-[45%]">
          {mode === "work" ? (
            <>
              <div className="flex flex-col gap-2">
                <div className="flex flex-row gap-2 justify-between items-end">
                  <span className="text-2xl">{data.company}</span>
                  <span className="font-normal">{data.place}</span>
                </div>
                <div className="flex flex-row gap-2 justify-end items-end font-normal">
                  <span>{data.position}</span>
                </div>
                <div className="font-normal text-[0.75rem] text-(--brand-dark-light)">
                  <span>{data.description}</span>
                </div>
                <div className="flex flex-row gap-2">
                  {data.labels.map((label, index) => (
                    <span
                      key={index}
                      className="text-[0.75rem] bg-white text-(--brand-dark) p-2 rounded-full font-bold"
                    >
                      {label}
                    </span>
                  ))}
                </div>
              </div>
            </>
          ) : mode === "project" ? (
            <></>
          ) : (
            <></>
          )}
        </div>
        <div className="flex flex-col items-center w-[10%]">
          <div className="">
            <div className="w-5.5 h-5.5 bg-white rounded-full"></div>
          </div>
          <div className="h-full mt-2">
            <div className="border-l-4 border-white h-full"></div>
          </div>
        </div>
        <div className="w-[45%]">
          {mode === "work" ? (
            <>
              <div className="flex flex-col gap-2 justify-start items-start font-normal text-(--brand-dark-light)">
                <span>{data.date}</span>
              </div>
            </>
          ) : mode === "project" ? (
            <></>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}
