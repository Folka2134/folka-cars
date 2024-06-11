import { OrderParams } from "@/types/orderTypes";
import { connectToDatabase } from "@lib/database";
import Order from "@lib/database/models/order.model";
import { handleError } from "@utils";

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