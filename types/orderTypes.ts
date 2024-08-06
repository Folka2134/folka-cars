export type OrderParams = {
  carId: string;
  carMake: string;
  carModel: string;
  carRent: number;
  userId: string | undefined;
  startDate: Date;
  numberOfDays: number;
  totalCost: number;
};

export type CheckoutParams = {
  carId: any;
  userId: string;
};

export type GetOrdersByUserParams = {
  userId: string;
  limit?: number;
  page: number;
};
