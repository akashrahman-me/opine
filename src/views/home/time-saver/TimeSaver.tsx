import React from "react";
import savers from "./savers.json";

function TimeSaver() {
  return (
    <section className="pt-10 sm:py-10 md:py-20 mb-20">
      <div className="container">
        <div className="text-center mb-14 sm:mb-20">
          <h2 data-aos="fade-up" className="text-5xl">
            Save hours every week
          </h2>
          <p
            data-aos="fade-up"
            data-aos-duration="500"
            className="text-dark-200"
          >
            Work smarter and make time for more creative work
          </p>
        </div>
        {/*grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 */}
        <div className="max-w-contain mx-auto gap-x-10 gap-y-12 next-level-grid">
          {savers.map(({description, id, title, thumb}) => (
            <div
              className="next-level-grid-item"
              key={id}
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <div className="mb-4">
                <img className="rounded-lg w-full" src={thumb} alt="" />
              </div>
              <div className="font-poppins w-[90%] mx-auto text-center">
                <b className="font-medium  text-lg leading-6">{title}</b>
                <p className="text-dark-200 text-[12px] leading-4 left-4">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TimeSaver;
