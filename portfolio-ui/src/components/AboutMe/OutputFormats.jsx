import { Trans } from "react-i18next";

export default function OutputFormats({ format = "html" }) {
  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row text-[0.75rem] md:text-[0.95rem] lg:text-[1rem] font-normal justify-center">
        <div className="w-full md:w-[20%] flex justify-start md:justify-end ">
          {format === "java" ? (
            <span className="me-1 tracking-[1.08px]">
              System.<span className="text-(--accent-red)">out</span>.println
              <span className="text-(--accent-red)">("</span>
            </span>
          ) : format === "python" ? (
            <span className="me-1 tracking-[1.08px]">
              <span className="">print</span>
              <span className="text-(--accent-red)">('</span>
            </span>
          ) : format === "html" ? (
            <span className="me-1 tracking-[1.08px]">
              <span className="text-(--accent-red)">{"<"}</span>
              <span className="">span</span>
              <span className="text-(--accent-red)">{">"}</span>
            </span>
          ) : null}
        </div>
        <div className="flex md:justify-center text-white tracking-[1.08px] w-fulls md:w-[40%] lg:w-[60%] shrink-0">
          <span className="">
            <Trans
              i18nKey="aboutme.description"
              components={{
                accent: <strong className="font-bold text-(--accent-red)" />,
                strong: <strong className="font-bold" />,
                br: <br />,
              }}
            />
          </span>
        </div>
        <div className="flex justify-items-end items-end w-full md:w-[20%]">
          <span className=" justify-self-end tracking-[1.08px] ">
            {format === "java" ? (
              <>
                <span className=" text-(--accent-red)">{'")'}</span>
                <span>;</span>
              </>
            ) : format === "python" ? (
              <>
                <span className=" text-(--accent-red)">{'")'}</span>
              </>
            ) : format === "html" ? (
              <>
                <span className=" text-(--accent-red)">{"</"}</span>
                <span className="">span</span>
                <span className=" text-(--accent-red)">{">"}</span>
              </>
            ) : null}
          </span>
        </div>
      </div>
    </div>
  );
}
