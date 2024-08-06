import { getOrdersByUser } from "@lib/actions/order.actions";
import React from "react";

const OrdersPage = async ({ params: { id } }: any) => {
  const userOrders = await getOrdersByUser({ userId: id, limit: 6, page: 1 });
  console.log(userOrders);

  return <div>OrdersPage</div>;
};

export default OrdersPage;
