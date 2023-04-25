import Button from "@/components/common/button/Button";
import Link from "next/link";
import React from "react";

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
      <main>
        <div className="container pt-24">
          <div className="text-center">
            <h1 className="font-medium text-6xl mb-6">10x faster feedback</h1>
            <p className="text-dark-200">
              Your new home for collaborating on creative work.
            </p>
            <div className="flex justify-center items-center gap-6">
              <Button>Try the demo</Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
