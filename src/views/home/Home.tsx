import Button from "@/components/common/button/Button";
import Link from "next/link";
import React, {useState} from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import wrapInSpan from "@/utils/wrapInSpan";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FaqsItem from "./faqs/FaqsItem";

const faqs = [
  {
    question: "Do I still take calls?",
    answer:
      "Face to face discussion is invaluable. Where Opine fits in is giving your team fast and efficient communication between calls. This means many meetings can be skipped or reduced - so you can use meeting time to focus on the important stuff.",
  },
  {
    question: "My clients prefer everything in email",
    answer:
      "Opine can complement email communication by providing a more visual and interactive way to share feedback.",
  },
  {
    question: "What’s the difference between Opine and Loom?",
    answer:
      "Opine focuses on providing instant video feedback, while Loom is more about asynchronous video messaging.",
  },
  {
    question: "Does Opine work for simple projects?",
    answer:
      "Absolutely - just drag and drop your file or add your website url, share the link, and you can get instant video feedback.",
  },
  {
    question: "Does Opine work for big projects?",
    answer:
      "Yes, Opine can handle large projects and streamline communication between team members.",
  },
  {
    question: "Is it faster to read feedback, or watch a video?",
    answer:
      "It depends on personal preferences and the type of feedback. Video can provide more context, while text might be quicker for some users.",
  },
  {
    question: "Can clients and newbies use it?",
    answer:
      "Yes, Opine is designed to be user-friendly for both clients and new users.",
  },
  {
    question: "Can I see multiple images together on a canvas?",
    answer:
      "Yes, Opine allows you to view multiple images on a single canvas for easy comparison and feedback.",
  },
  {
    question: "Can I edit my work in Opine?",
    answer:
      "Opine is primarily for providing feedback, but it may have some basic editing features.",
  },
  {
    question: "Can developers see the CSS specifications in Opine?",
    answer:
      "Opine focuses on visual feedback, but developers can use other tools to inspect CSS specifications.",
  },
];

const footerLinks = [
  {
    id: 1,
    name: "Contact",
    url: "/",
  },
  {
    id: 2,
    name: "Terms",
    url: "/",
  },
  {
    id: 3,
    name: "Privacy",
    url: "/",
  },
  {
    id: 4,
    name: "Status",
    url: "/",
  },
  {
    id: 5,
    name: "Security",
    url: "/",
  },
];

function Home() {
  return (
    <div>
      <nav className="bg-white py-3 sticky top-0 z-[1020]">
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
      <section className="py-20 bg-[#FBFBFB]  overflow-hidden mb-20">
        <div className="w-[150%] -ml-[22%]">
          <Slider
            infinite={true}
            speed={500}
            slidesToShow={3}
            slidesToScroll={1}
            autoplay
          >
            {[...Array(10)].map((_, index) => (
              <div className="px-4">
                <div
                  key={index}
                  className="bg-white py-20 px-[60px] rounded-3xl"
                >
                  <div>
                    <p className="text-dark-600 text-xl leading-7 mb-12 text-center">
                      Et pulvinar eget amet pellentesque justo. Sed sagittis
                      gravida at eu est nec ullamcorper. Posuere sollicitudin
                      tellus nulla tortor volutpat. Mauris praesent nam vitae
                      tincidunt sit donec blandit tellus. Mauris scelerisque
                      pulvinar neque elit imperdiet nec.
                    </p>
                    <div className="flex justify-center">
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
                          <span className="text-dark-400 text-lg">
                            Freelancer
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
      <section className="py-20 bg-white mb-20">
        <div className="container">
          <div className="max-w-[1125px] bg-[#FBFBFB] rounded-3xl mx-auto p-20">
            <h2 className="text-5xl text-dark-800 block mb-20 text-center">
              People often ask...
            </h2>
            <div>
              {faqs.map(({question, answer}, index) => (
                <FaqsItem answer={answer} question={question} key={index} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-[#1A1919] text-white">
        <div className="py-20">
          <div className="max-w-[1126px] mx-auto text-center bg-dark-500 p-20 rounded-3xl">
            <h2 className="text-4xl mb-20 blockt">
              Great feedback creates great work.
            </h2>
            <div className="flex justify-center gap-6">
              <Button
                href="/"
                className="min-w-[192px]"
                size="semimedium"
                color="white"
              >
                Sign Up
              </Button>
              <Button href="/" className="min-w-[192px]" size="semimedium">
                View the demo
              </Button>
            </div>
          </div>
        </div>
        <div className="max-w-[1126px] mx-auto py-10 grid grid-cols-2">
          <div>
            <p className="">Opine - creative feedback re-invented.</p>
          </div>
          <div className="flex justify-end text-right">
            <div>
              <div className="flex items-center gap-10 flex-wrap mb-10">
                {footerLinks.map(({id, name, url}) => (
                  <Link key={id} href={url} className="text-dark-200 text-xl">
                    {name}
                  </Link>
                ))}
              </div>
              <p className="text-dark-200 text-[10px] leading-[18px]">
                &copy; {new Date().getFullYear()} All Rights Reserved by Opine
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
