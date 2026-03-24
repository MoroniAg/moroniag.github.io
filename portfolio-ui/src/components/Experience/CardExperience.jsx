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
    type: "project",
    links: [
      {
        url: "https://github.com/username/repo",
        icon: "https://simpleicons.org/icons/github.svg",
        tooltip: "Repositorio",
      },
      {
        url: "https://demo.example.com",
        icon: "https://simpleicons.org/icons/netlify.svg",
        tooltip: "Demo",
      },
    ],
  },
  mode = "work",
}) {
  return (
    <>
      <div className="flex flex-row gap-4 bg-(--brand-darker) p-4 rounded-2xl w-full">
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

                {data.links && data.links.length > 0 && (
                  <div className="flex flex-row gap-2 mt-2">
                    {data.links.map((l, i) => (
                      <a
                        key={i}
                        href={l.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={l.tooltip}
                        className="inline-flex items-center justify-center p-1"
                      >
                        {l.icon ? (
                          l.icon.startsWith("http") ? (
                            <img
                              src={l.icon}
                              alt={l.tooltip}
                              className="w-4 h-4"
                            />
                          ) : (
                            <i className={l.icon} />
                          )
                        ) : (
                          <span className="w-4 h-4 bg-gray-200 rounded-full" />
                        )}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </>
          ) : mode === "project" ? (
            <>
              <div className="flex flex-col gap-2 justify-end items-end font-normal text-(--brand-dark-light)">
                <span>{data.date}</span>
              </div>
            </>
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
            <>
              <div className="flex flex-col gap-2">
                <div className="flex justify-start text-2xl text-(--accent-red) ">
                  <span>{data.company}</span>
                </div>
                <div className="flex justify-start font-normal">
                  <span>{data.type}</span>
                </div>
                <div className="font-normal text-[0.75rem] text-(--brand-dark-light)">
                  <span>{data.description}</span>
                </div>
                <div className="flex flex-row gap-2 justify-between">
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
                  <div className="flex flex-row gap-2 items-end">
                    {data.links &&
                      data.links.length > 0 &&
                      data.links.map((link, index) => (
                        <a
                          key={index}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          title={link.tooltip}
                          className="inline-flex items-center justify-center p-1 h-6 w-6 bg-white rounded-full"
                        >
                          {link.icon ? (
                            link.icon.startsWith("http") ? (
                              <img
                                src={link.icon}
                                alt={link.tooltip}
                                className="w-4 h-4"
                              />
                            ) : (
                              <i className={link.icon} />
                            )
                          ) : (
                            <span className="w-4 h-4 bg-gray-200 rounded-full" />
                          )}
                        </a>
                      ))}
                  </div>
                </div>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}
