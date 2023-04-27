import React from "react";
import innovates from "./innovates.json";

function SpeedInnovate() {
  return (
    <section className="bg-[#1A1919] py-20 md:py-40 text-white">
      <div className="container">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-5xl" data-aos="fade-up">
            Creative Projects, 32% Faster
          </h2>
          <p
            className="text-dark-200"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            Survey of users, March 2023
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 max-w-contain mx-auto">
          {innovates.map(({description, icon, id, title}) => (
            <div
              data-aos="zoom-in"
              key={id}
              className="bg-dark-500 hover:bg-dark-500/80 cursor-pointer flex sm:flex-row flex-col gap-6 p-6 sm:p-10 rounded-3xl"
            >
              <div className="flex-[0_0_44px]">
                <img src={icon} alt="" />
              </div>
              <div>
                <h3 className="mb-2">{title}</h3>
                <p className="text-dark-200 text-xl">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SpeedInnovate;
