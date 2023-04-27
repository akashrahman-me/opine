import React from "react";

function Founder() {
  return (
    <section>
      <div className="container py-16 sm:py-20 md:py-40 lg:py-60">
        <div className="flex flex-col items-center">
          <div
            data-aos="fade-up"
            className="text-center text-4xl max-w-[966px] mb-10"
          >
            <p>“Most tools send feedback as text.</p>
            <p className="bg-primary px-1 inline">
              But typing is slow. It's hard work. It stifles creative thinking.
            </p>
            <p className="mt-12">Great feedback is about sharing new ideas.</p>
            <p>And that's where video really shines.”</p>
          </div>
          <div data-aos="fade-up" data-aos-duration="600">
            <div className="flex flex-col items-center">
              <img
                className="rounded-full w-16 h-16 block mb-3"
                src="/images/Ellipse 1.png"
                alt=""
              />
              <strong className="text-xl">Will Taylor</strong>
              <p className="text-lg leading-6 text-dark-200">Founder Opine</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Founder;
