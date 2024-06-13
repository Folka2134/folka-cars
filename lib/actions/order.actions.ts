"use server"

import Stripe from "stripe";
import { redirect } from "next/navigation";

import { CheckoutParams, OrderParams } from "@/types/orderTypes";
import { connectToDatabase } from "@lib/database";
import Order from "@lib/database/models/order.model";
import { handleError } from "@utils";


export const checkoutOrder = async (order: CheckoutParams) => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: "usd",
            unit_amount: 500,
            product_data: {
              name: order.carId.carId
            }
          },
          quantity: 1
        },
      ],
      metadata: {
        carId: order.carId.carId,
        userId: order.userId,
      },
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/`,
      cancel_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/`,
      })
    redirect(session.url!)
  } catch (error) {
    throw error
  }
        
}


export async function createOrder(order: OrderParams) {
  try {
    await connectToDatabase()

    // Create new order
    const newOrder = await Order.create(order)
    return JSON.parse(JSON.stringify(newOrder))
  } catch (error) {
    handleError(error)
  }
}