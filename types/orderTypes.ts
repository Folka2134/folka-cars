export type OrderParams = {
  carId: string | undefined;
  userId: string | undefined;
  startDate: Date;
  numberOfDay: number;
  totalCost: number;
};

export type CheckoutParams = {
  carId: any;
  userId: string;
};
