import Button from "@/components/common/button/Button";
import Link from "next/link";
import React from "react";
import footerLinks from "./footerLinks.json";

function Footer() {
  return (
    <footer className="bg-[#1A1919] text-white">
      <div className="pt-16 sm:pt-20 pb-4 sm:pb-12 lg:py-20 container">
        <div
          data-aos="fade-up"
          className="max-w-contain mx-auto text-center bg-dark-500 p-10 sm:p-16 lg:p-20 rounded-3xl"
        >
          <h2
            data-aos="fade-up"
            data-aos-duration="600"
            className="text-4xl mb-14 sm:mb-20 blockt"
          >
            Great feedback creates great work.
          </h2>
          <div
            data-aos="fade-up"
            data-aos-duration="800"
            className="flex sm:flex-row flex-col justify-center gap-6"
          >
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
      <div className="container">
        <div className="max-w-contain mx-auto py-8 sm:py-10 grid lg:grid-cols-2 lg:gap-0 gap-6 sm:gap-8">
          <div>
            <p className="">Opine - creative feedback re-invented.</p>
          </div>
          <div className="flex lg:justify-end lg:text-right">
            <div>
              <div className="flex items-center gap-x-6 gap-y-2 sm:gap-10 flex-wrap mb-4 lg:mb-10">
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
      </div>
    </footer>
  );
}

export default Footer;
