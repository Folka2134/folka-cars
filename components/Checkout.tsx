import { checkoutOrder, createOrder } from "@lib/actions/order.actions";
import { IOrder } from "@lib/database/models/order.model";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";

loadStripe(`${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!}`);

type CheckoutParams = {
  carId: string;
  userId: string;
  carRent: number;
};

const Checkout = ({ carId, userId, carRent }: CheckoutParams) => {
  const [numberOfDays, setNumberOfDays] = useState<number>(1);

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      console.log("Order placed!");
    }
    if (query.get("canceled")) {
      console.log("Order canceled!");
    }
  }, []);

  // const onCheckout = async () => {
  //   const order = {
  //     carId,
  //     userId,
  //   };

  //   await checkoutOrder(order);
  // };

  const onCheckout = async () => {
    try {
      const order = {
        carId,
        userId,
        startDate: new Date(),
        numberOfDays: numberOfDays,
        totalCost: numberOfDays * carRent,
      };

      // await createOrder(order)
      await checkoutOrder(order);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form action={onCheckout}>
      <select
        value={numberOfDays}
        onChange={(e) => setNumberOfDays(parseInt(e.target.value))}
        className="mb-4 rounded-lg border-2 border-gray-200 p-2"
      >
        <option value={1}>1 day</option>
        <option value={2}>2 days</option>
        <option value={3}>3 days</option>
        <option value={4}>4 days</option>
        <option value={5}>5 days</option>
        <option value={6}>6 days</option>
        <option value={7}>7 days</option>
      </select>
      <span className="mx-3 text-xl">${numberOfDays * carRent}</span>
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
