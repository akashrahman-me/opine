import Button from "@/components/common/button/Button";
import Link from "next/link";
import React from "react";
import ScrollContainer from "react-indiana-drag-scroll";

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
      <section>
        <div className="container text-center mb-44">
          <h2 className="text-dark-500 text-4xl">And it’s free.</h2>
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
    </div>
  );
}

export default Home;
