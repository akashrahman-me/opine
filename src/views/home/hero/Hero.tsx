import Button from "@/components/common/button/Button";
import React from "react";

function Hero() {
  return (
    <main className="mb-20">
      <div className="container pt-24">
        <div className="text-center mb-10">
          <h1 data-aos="fade-up" className="font-medium text-6xl mb-6">
            10x faster feedback
          </h1>
          <p
            data-aos="fade-up"
            data-aos-duration="500"
            className="text-dark-200 mb-6 sm:mb-14"
          >
            Your new home for collaborating on creative work.
          </p>
          <div
            data-aos="fade-up"
            data-aos-duration="600"
            className="flex sm:flex-row flex-col sm:justify-center sm:items-center sm:gap-6 gap-4 py-4"
          >
            <Button href="/" className="!px-8" color="white" variant="outlined">
              Sign up
            </Button>
            <Button href="/" className="!px-8">
              Try the demo
            </Button>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="700"
          className="flex justify-center"
        >
          <img className="shadow-100" src="/images/Frame 2282.png" alt="" />
        </div>
      </div>
    </main>
  );
}

export default Hero;
