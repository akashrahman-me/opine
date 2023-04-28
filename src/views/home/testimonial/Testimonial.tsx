import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testimonial from "./testimonial.json";

function Testimonial() {
  return (
    <section className="py-16 md:py-20 bg-[#FBFBFB]  overflow-hidden mb-12 mb:mb-20">
      <div className="md:w-[150%] md:-ml-[22%]">
        <Slider
          infinite={true}
          speed={500}
          slidesToShow={3}
          slidesToScroll={1}
          autoplay
          responsive={[
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ]}
        >
          {testimonial.map(({id, review, user}) => (
            <div className="px-4" key={id}>
              <div className="bg-white py-10 md:py-20 px-10 md:px-[60px] rounded-3xl">
                <div>
                  <p className="text-dark-600 text-xl leading-7 mb-12 text-center">
                    {review}
                  </p>
                  <div className="flex justify-center">
                    <div className="flex gap-3 items-center">
                      <div>
                        <img
                          className="w-[60px] aspect-square object-cover rounded-full"
                          src={user.avatar}
                          alt=""
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <strong className="font-normal text-2xl text-dark-600 block">
                          {user.name}
                        </strong>
                        <span className="text-dark-400 text-lg">
                          {user.title}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Testimonial;
