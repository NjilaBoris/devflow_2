import Image from "next/image";
import Link from "next/link";
import React from "react";

import MobileNavigation from "./MobileNavigation";
import Theme from "./Theme";

const Navbar = () => {
  return (
    <nav
      className="flex-between background-light900_dark200 fixed z-50 p-6 
    shadow-light-300 dark:shadow-none w-full sm:px-12 gap-5"
    >
      <Link href="/" className="flex gap-1 items-center">
        <Image
          src="/images/site-logo.svg"
          alt="DevFlow Logo"
          width={20}
          height={23}
        />
        <p className="h2-bold font-space-grotesk text-dark-100 dark:text-light-900 max-sm:hidden">
          Dev<span className="text-primary-500">Flow</span>
        </p>
      </Link>
      <p>Global Search</p>
      <div className="flex-between gap-5">
        <Theme />
        <MobileNavigation />
      </div>
    </nav>
  );
};

export default Navbar;
