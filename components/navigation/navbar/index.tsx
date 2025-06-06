import Image from "next/image";
import Link from "next/link";
import React from "react";

import { auth } from "@/auth";
import GlobalSearch from "@/components/search/GlobalSearch";
import UserAvatar from "@/components/UserAvatar";

import MobileNavigation from "./MobileNavigation";
import Theme from "./Theme";

const Navbar = async () => {
  const session = await auth();
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
      <GlobalSearch />
      <div className="flex-between gap-5">
        <Theme />
        {session?.user?.id && (
          <UserAvatar
            id={session.user.id}
            name={session.user.name!}
            imageUrl={session.user?.image}
          />
        )}

        <MobileNavigation />
      </div>
    </nav>
  );
};

export default Navbar;
