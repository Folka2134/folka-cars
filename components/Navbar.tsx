import Link from "next/link";
import Image from "next/image";

import CustomButton from "./CustomButton";
import { SignedIn, SignedOut, UserButton, auth } from "@clerk/nextjs";

const NavBar = () => {
  const { sessionClaims } = auth();

  const userId = sessionClaims?.userId as string;

  return (
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
        <div className="flex w-32 items-center justify-end gap-10">
          <SignedIn>
            <Link href={`/profile/${userId}/orders`}>
              <span className="text-lg">Orders</span>
            </Link>
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
};

export default NavBar;
