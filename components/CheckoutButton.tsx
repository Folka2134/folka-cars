import { SignedIn, SignedOut, useUser } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import Checkout from "./Checkout";

const CheckoutButton = (carId: any) => {
  const { user } = useUser();
  const userId = user?.publicMetadata.userId as string;

  return (
    <>
      <SignedOut>
        <button className="rounded-lg bg-[#2B59FF] px-3 py-2 font-semibold text-white hover:bg-opacity-90 focus:bg-opacity-90 active:bg-violet-700">
          <Link href="/sign-in">Rent now!</Link>
        </button>
      </SignedOut>
      <SignedIn>
        <Checkout carId={carId} userId={userId} />
      </SignedIn>
    </>
  );
};

export default CheckoutButton;
