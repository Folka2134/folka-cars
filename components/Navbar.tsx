import Link from "next/link";
import Image from "next/image";

import CustomButton from "./CustomButton";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const NavBar = () => (
  <header className="z-10 w-full">
    <nav className="flex w-full items-center justify-between px-6 py-4 sm:px-24 lg:px-36 xl:px-52">
      <Link href="/" className="flex items-center justify-center ">
        <Image
          src="/logo.png"
          alt="logo"
          width={200}
          height={20}
          className="rounded-full bg-[#2B59FF] bg-opacity-80 object-contain"
        />
      </Link>
      <div className="flex w-32 justify-end gap-3">
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
          {/* <MobileNav /> */}
        </SignedIn>
        <SignedOut>
          <button className="rounded-full">
            <Link href="/sign-in">Login</Link>
          </button>
        </SignedOut>
      </div>
    </nav>
  </header>
);

export default NavBar;
