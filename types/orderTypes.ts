export type OrderParams = {
  stripeId: string;
  carId: string | undefined;
  userId: string | undefined;
  startDate: Date;
}

export type CheckoutParams = {
  carId: any;
  userId: string;
}