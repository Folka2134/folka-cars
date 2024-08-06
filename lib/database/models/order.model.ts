import { Schema, model, models } from "mongoose";

export const OrderSchema = new Schema({
  carId: { type: String, required: true },
  userId: { type: String, required: true },
  startDate: { type: Date, default: Date.now },
  numberOfDays: { type: Number, required: true },
  totalCost: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Order = models.Order || model("Order", OrderSchema);

export default Order;
