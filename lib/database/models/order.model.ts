import mongoose from "mongoose"
import { Schema, model, models } from "mongoose";

export const OrderSchema = new Schema({
  stripeId: { type: String },
  carId: { type: String, required: true },
  userId: { type: String, required: true},
  startDate: { type: Date, default: Date.now },
})

const Order = models.Order || model("Order", OrderSchema)

export default Order;