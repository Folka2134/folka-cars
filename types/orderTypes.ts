export type OrderParams = {
  stripeId: string;
  carId: string | undefined;
  userId: string | undefined;
  status: string;
  startDate: string;
}