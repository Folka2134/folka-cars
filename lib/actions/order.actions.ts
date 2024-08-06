"use server";

import Stripe from "stripe";
import { redirect } from "next/navigation";

import {
  CheckoutParams,
  GetOrdersByUserParams,
  OrderParams,
} from "@/types/orderTypes";
import { connectToDatabase } from "@lib/database";
import Order from "@lib/database/models/order.model";
import { handleError } from "@utils";
import User from "@lib/database/models/user.model";

type checkoutOrderParams = {
  carId: string;
  carMake: string;
  carModel: string;
  carRent: number;
  userId: string;
  startDate: Date;
  numberOfDays: number;
  totalCost: number;
};

const getUserDetails = async (query: any) => {
  try {
    const populatedQuery = await query.populate({
      path: "user",
      model: User,
      select: "firstName lastName",
    });
    return populatedQuery;
  } catch (error) {
    throw error; // Rethrow the error to handle it further up the call stack
  }
};

export const checkoutOrder = async (order: checkoutOrderParams) => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2024-04-10",
    typescript: true,
  });
  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: "usd",
            unit_amount: (order.totalCost / order.numberOfDays) * 100,
            product_data: {
              name: order.carMake + " " + order.carModel,
            },
          },
          quantity: order.numberOfDays,
        },
      ],
      metadata: {
        carId: order.carId,
        userId: order.userId,
      },
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/`,
      cancel_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/`,
    });
    await createOrder(order);
    redirect(session.url!);
  } catch (error) {
    throw error;
  }
};

export async function createOrder(order: OrderParams) {
  try {
    await connectToDatabase();

    const user = await User.findById(order.userId);

    if (!user) {
      throw new Error("User not found");
    }

    // Create new order
    const newOrder = await Order.create({ ...order, user: order.userId });
    return JSON.parse(JSON.stringify(newOrder));
  } catch (error) {
    handleError(error);
  }
}

export const getOrdersByUser = async ({
  userId,
  limit = 6,
  page,
}: GetOrdersByUserParams) => {
  try {
    await connectToDatabase();

    const conditions = { userId: userId };
    const skipAmount = (page - 1) * limit;

    const ordersQuery = Order.find(conditions)
      .sort({ createdAt: "desc" })
      .skip(skipAmount)
      .limit(limit);

    const orders = await getUserDetails(ordersQuery);
    const ordersCount = await Order.countDocuments(conditions);

    return {
      data: JSON.parse(JSON.stringify(orders)),
      totalPages: Math.ceil(ordersCount / limit),
    };
  } catch (error) {
    handleError(error);
  }
};
