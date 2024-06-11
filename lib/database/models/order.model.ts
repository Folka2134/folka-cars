import { Schema, model, models } from "mongoose";

export const OrderSchema = new Schema({
  carId: { type: String, required: true },
  userId: { type: String, required: true},
  status: { type: String},
  startDate: { type: String}
})

const Order = models.Order || model("Order", OrderSchema)

export default Order;