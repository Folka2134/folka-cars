import { WebhookEvent } from "@clerk/nextjs/dist/types/server"
import { createOrder } from "@lib/actions/order.actions"
import { handleError } from "@utils"
import { headers } from "next/headers"
import { NextResponse } from "next/server"
import stripe from "stripe"
import { Webhook } from "svix"

export const POST = async (req: Request, res: Response) => {
  const endPointSecret = process.env.STRIPE_WEBHOOK_SECRET
  const sig = req.headers.get('stripe-signature')
  let event

  if (!endPointSecret) {
    throw new Error('Please add STRIPE_WEBHOOK_SECRET from Stripe Dashboard to .env or .env.local')
  }

  if (!sig) {
    throw new Response('Error occured -- no stripe signature', {
      status: 400
    })
  }

  // Get body
  const payload = await req.json()
  const body = JSON.stringify(payload)
  
  try {
    event = stripe.webhooks.constructEvent(body, sig, endPointSecret)
  } catch (error) {
    handleError(error)
    return
  }

  if(event!.type === 'checkout.session.completed') {
    const { id, metadata } = event.data.object

    const order = {
      carId: metadata?.carId.toString(),
      userId: metadata?.userId,
      status: 'completed',
      startDate: new Date().toISOString()
    }

    const newOrder =  await createOrder(order)
    return NextResponse.json(newOrder)        
  }

  return NextResponse.json("Webhook received", { status: 200})
}