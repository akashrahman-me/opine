import React from "react";
import ScrollContainer from "react-indiana-drag-scroll";

function FreeForever() {
  return (
    <section className="mb-16 sm:mb-20 md:mb-28 lg:mb-40">
      <div className="container text-center mb-16 sm:mb-20 lg:mb-44">
        <h2 data-aos="fade-up" className="text-4xl">
          And it’s free.
        </h2>
        <p data-aos="fade-up" data-aos-duration="500" className="text-dark-200">
          No time limits, no obligation to upgrade.
        </p>
      </div>
      <div className="bg-[#FBFBFB] py-10 sm:py-20">
        <ScrollContainer>
          <div className="flex gap-12 sm:gap-[70px]">
            {[
              "/images/Company logo.svg",
              "/images/Company logo (1).svg",
              "/images/Company logo (4).svg",
              "/images/Company logo (5).svg",
              "/images/Company logo (2).svg",
              "/images/Company logo (3).svg",
              "/images/Company logo (4).svg",
              "/images/Company logo (5).svg",
              "/images/Company logo (3).svg",
              "/images/Company logo (6).svg",
            ].map((image, index) => (
              <img src={image} alt="" key={index} />
            ))}
          </div>
        </ScrollContainer>
      </div>
    </section>
  );
}

export default FreeForever;
