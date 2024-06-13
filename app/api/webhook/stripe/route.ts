import Stripe from "stripe"
import { stripe } from "@lib/stripe"
import { headers } from "next/headers"
import { NextResponse } from "next/server"

import { createOrder } from "@lib/actions/order.actions"

export const POST = async (req: Request) => {
  const body = await req.text();
  const sig = headers().get('stripe-signature') as string
  const endPointSecret = process.env.STRIPE_WEBHOOK_SECRET!
  let event: Stripe.Event

  if (!endPointSecret) {
    throw new Error('Please add STRIPE_WEBHOOK_SECRET from Stripe Dashboard to .env or .env.local')
  }

  if (!sig) {
    throw new Response('Error occured -- no stripe signature', {
      status: 400
    })
  }
  
  try {
    event = stripe.webhooks.constructEvent(body, sig, endPointSecret)
  } catch (error) {
    return new NextResponse("invalid signature", { status: 400 })
  }

  const session = event.data.object as Stripe.Checkout.Session

  if(event.type === 'checkout.session.completed') {
    const { id, metadata } = event.data.object

    const order = {
      stripeId: id,
      carId: metadata?.carId.toString(),
      userId: metadata?.userId,
      startDate: new Date()
    }

    const newOrder =  await createOrder(order)
    return NextResponse.json({ message: 'OK', order: newOrder })        
  }

  return new NextResponse('ok', { status: 200 })
}