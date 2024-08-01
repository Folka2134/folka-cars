import { checkoutOrder, createOrder } from "@lib/actions/order.actions";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect } from "react";

loadStripe(`${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!}`);

type CheckoutParams = {
  carId: string;
  userId: string;
};

const Checkout = ({ carId, userId }: CheckoutParams) => {
  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      console.log("Order placed!");
    }
    if (query.get("canceled")) {
      console.log("Order canceled!");
    }
  }, []);

  console.log(userId);

  // const onCheckout = async () => {
  //   const order = {
  //     carId,
  //     userId,
  //   };

  //   await checkoutOrder(order);
  // };

  const onCheckout = async () => {
    const numberOfDays = 3;

    const order = {
      carId,
      userId,
      startDate: new Date(),
      numberOfDays: numberOfDays,
      totalCost: numberOfDays * 100,
    };

    await createOrder(order);
  };

  return (
    <form action={onCheckout}>
      <button
        className="rounded-lg bg-[#2B59FF] px-3 py-2 font-semibold text-white hover:bg-opacity-90 focus:bg-opacity-90 active:bg-violet-700"
        type="submit"
      >
        Rent now!
      </button>
    </form>
  );
};

export default Checkout;
