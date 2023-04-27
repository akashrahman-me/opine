import Button from "@/components/common/button/Button";
import Link from "next/link";
import React from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import wrapInSpan from "@/utils/wrapInSpan";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
  return (
    <div>
      <nav className="bg-white py-3 sticky top-0">
        <div className="container flex justify-between gap-10 items-center">
          <div>
            <Link href="/">
              <img height={32} src="/images/Logo Block.svg" alt="" />
            </Link>
          </div>
          <div className="">
            <Button color="dark-500" size="small" href="/">
              Sign Up
            </Button>
          </div>
        </div>
      </nav>
      <main className="mb-20">
        <div className="container pt-24">
          <div className="text-center mb-10">
            <h1 className="font-medium text-6xl mb-6">10x faster feedback</h1>
            <p className="text-dark-200 mb-14">
              Your new home for collaborating on creative work.
            </p>
            <div className="flex justify-center items-center gap-6 py-4">
              <Button className="!px-8" color="white" variant="outlined">
                Sign up
              </Button>
              <Button className="!px-8">Try the demo</Button>
            </div>
          </div>
          <div className="flex justify-center">
            <img className="shadow-100" src="/images/Frame 2282.png" alt="" />
          </div>
        </div>
      </main>
      <section className="mb-40">
        <div className="container text-center mb-44">
          <h2 className="text-4xl">And it’s free.</h2>
          <p className="text-dark-200">
            No time limits, no obligation to upgrade.
          </p>
        </div>
        <div className="bg-[#FBFBFB] py-20">
          <ScrollContainer>
            <div className="flex gap-[70px]">
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
      <section className="mb-40">
        <div className="container">
          <div className="text-center">
            <h2 className="text-5xl mb-2">How Opine works</h2>
            <p className="text-dark-200">Your new async feedback flow</p>
          </div>
          <div className="max-w-[1126px] mx-auto">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="flex flex-row even:flex-row-reverse items-center gap-10 py-20"
              >
                <div className="px-10">
                  <h4
                    className="text-4xl"
                    dangerouslySetInnerHTML={{
                      __html: wrapInSpan("*Present* the work"),
                    }}
                  />
                  <p className="text-dark-200">
                    Record a quick video intro, then sharethe link.
                  </p>
                </div>
                <div>
                  <img src="/images/Frame 2161.svg" alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#1A1919] py-40 text-white">
        <div className="container">
          <div className="text-center mb-20">
            <h2 className="text-5xl">Creative Projects, 32% Faster</h2>
            <p className="text-dark-200">Survey of users, March 2023</p>
          </div>
          <div className="grid grid-cols-2 gap-10 max-w-[1126px] mx-auto">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="bg-dark-500 hover:bg-dark-500/80 cursor-pointer flex gap-6 p-10 rounded-3xl"
              >
                <div className="">
                  <img src="/images/Frame 2287.svg" alt="" />
                </div>
                <div>
                  <h3 className="mb-2">All your feedback in one place</h3>
                  <p className="text-dark-200 text-xl">
                    Opine is a powerful feedback tool with team chat and a
                    flexible project manager.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="container py-60">
          <div className="flex flex-col items-center">
            <div className="text-center text-4xl max-w-[966px] mb-10">
              <p>“Most tools send feedback as text.</p>
              <p className="bg-primary px-1 inline">
                But typing is slow. It's hard work. It stifles creative
                thinking.
              </p>
              <p className="mt-12">
                Great feedback is about sharing new ideas.
              </p>
              <p>And that's where video really shines.”</p>
            </div>
            <div>
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
      <section className="py-20 mb-20">
        <div className="container">
          <div className="text-center mb-20">
            <h2 className="text-5xl">Save hours every week</h2>
            <p className="text-dark-200">
              Work smarter and make time for more creative work
            </p>
          </div>
          <div className="max-w-[1126px] mx-auto grid grid-cols-3 gap-x-10 gap-y-12">
            {[...Array(6)].map((_, index) => (
              <div>
                <div className="mb-4">
                  <img
                    className="rounded-lg"
                    src="/images/Frame 1779.png"
                    alt=""
                  />
                </div>
                <div className="font-poppins w-[90%] mx-auto text-center">
                  <b className="font-medium  text-lg leading-6">Video intros</b>
                  <p className="text-dark-200 text-[12px] leading-4 left-4">
                    Shorten or replace meetings with async video presentations
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-[#FBFBFB]">
        <div>
          <Slider
            infinite={true}
            speed={500}
            slidesToShow={3}
            slidesToScroll={1}
            centerMode={true}
            centerPadding="0"
          >
            {[...Array(10)].map((_, index) => (
              <div
                key={index}
                className="bg-white py-20 px-[60px] rounded-3xl outline"
              >
                <div>
                  <p className="text-dark-600 text-xl leading-7">
                    Et pulvinar eget amet pellentesque justo. Sed sagittis
                    gravida at eu est nec ullamcorper. Posuere sollicitudin
                    tellus nulla tortor volutpat. Mauris praesent nam vitae
                    tincidunt sit donec blandit tellus. Mauris scelerisque
                    pulvinar neque elit imperdiet nec.
                  </p>
                  <div className="flex gap-3 items-center">
                    <div>
                      <img
                        className="w-[60px] aspect-square object-cover rounded-full"
                        src="/images/Avatar.png"
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <strong className="font-normal text-2xl text-dark-600 block">
                        Kate Adams
                      </strong>
                      <span className="text-dark-400 text-lg">Freelancer</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </div>
  );
}

export default Home;
