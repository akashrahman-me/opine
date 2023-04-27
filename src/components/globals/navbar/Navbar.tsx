import Button from "@/components/common/button/Button";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
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
  );
}

export default Navbar;
