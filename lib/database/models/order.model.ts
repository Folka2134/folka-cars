import { Schema, model, models } from "mongoose";

export interface IOrder extends Document {
  carId: string;
  userId: string;
  startDate: Date;
  numberOfDays: number;
  totalCost: number;
  createdAt: Date;
  user: { firstName: string; lastName: string };
}

export const OrderSchema = new Schema({
  carId: { type: String, required: true },
  userId: { type: String, required: true },
  startDate: { type: Date, default: Date.now },
  numberOfDays: { type: Number, required: true },
  totalCost: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
  user: { type: Schema.Types.ObjectId, ref: "User" },
});

const Order = models.Order || model("Order", OrderSchema);

export default Order;
