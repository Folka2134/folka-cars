import Link from "next/link";
import Image from "next/image";

import CustomButton from "./CustomButton";

const NavBar = () => (
  <header className="absolute z-10 w-full">
    <nav className="flex w-full items-center justify-between px-6 py-4 sm:px-24 md:px-52 ">
      <Link href="/" className="flex items-center justify-center ">
        <Image
          src="/logo.png"
          alt="logo"
          width={200}
          height={20}
          className="rounded-full bg-[#2B59FF] bg-opacity-80 object-contain"
        />
      </Link>

      <CustomButton
        title="Sign in"
        btnType="button"
        containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
      />
    </nav>
  </header>
);

export default NavBar;
