import wrapInSpan from "@/utils/wrapInSpan";
import React from "react";
import processes from "./processes.json";

function OpineProcess() {
  return (
    <section className="mb-8 sm:mb-16 md:mb-28 lg:mb-40">
      <div className="container">
        <div className="text-center sm:mb-0 mb-4">
          <h2 className="text-5xl mb-2" data-aos="fade-up">
            How Opine works
          </h2>
          <p
            className="text-dark-200"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            Your new async feedback flow
          </p>
        </div>
        <div className="max-w-contain mx-auto">
          {processes.map(({id, img, title, description}, index) => (
            <div
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              key={id}
              className="flex flex-col lg:flex-row lg:even:flex-row-reverse items-center gap-10 py-10 md:py-20"
            >
              <div className="lg:px-10">
                <h4
                  className="text-4xl"
                  dangerouslySetInnerHTML={{
                    __html: wrapInSpan(title),
                  }}
                />
                <p className="text-dark-200">{description}</p>
              </div>
              <div className="">
                <img className="" src={img} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OpineProcess;
