import React from "react";
import Image from "next/image";

import logo from "../public/images/sp-logo.png";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex flex-row items-center w-full h-44 border-red-50 font-primary">
      <div>
        <Image src={logo} alt="Logo for the portfolio" width={64} height={80} />
      </div>
      <ul className="flex flex-row items-center ml-auto text-xl font-semibold gap-x-8 border-l-red-50">
        <li>
          <Link scroll={false} href="#About" className="p-4">
            About
          </Link>
        </li>
        <li>
          <button className="p-4">Contact</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
