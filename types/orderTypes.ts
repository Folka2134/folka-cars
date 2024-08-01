export type OrderParams = {
  carId: string | undefined;
  userId: string | undefined;
  startDate: Date;
  numberOfDays: number;
  totalCost: number;
};

export type CheckoutParams = {
  carId: any;
  userId: string;
};
