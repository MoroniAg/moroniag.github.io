import CardTechnologies from "./CardTechnologies";

export default function Technologies() {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-2 mt-4 ">
        <div>
          <span className="text-[1.5rem] md:text-[2rem] lg:text-[4rem]">
            Technologies
          </span>
          <div>
            <span className="text-[1.25rem] md:text-[1.5rem] lg:text-[3rem]">
              Backend
            </span>
            <div className="flex flex-row gap-4">
              <div>
                <span>
                  <CardTechnologies title="Java"></CardTechnologies>
                </span>
              </div>
              <div>
                <span>2</span>
              </div>
            </div>
          </div>
          <div>
            <span className="text-[1.25rem] md:text-[1.5rem] lg:text-[3rem]">
              Frontend
            </span>
            <div className="flex flex-row">
              <div>
                <span>1</span>
              </div>
              <div>
                <span>2</span>
              </div>
            </div>
          </div>
          <div>
            <span className="text-[1.25rem] md:text-[1.5rem] lg:text-[3rem]">
              DevOps
            </span>
            <div className="flex flex-row">
              <div>
                <span>1</span>
              </div>
              <div>
                <span>2</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <span className="text-[1.5rem] md:text-[2rem] lg:text-[4rem] text-(--accent-red)">
            More
          </span>
        </div>
      </div>
    </>
  );
}
