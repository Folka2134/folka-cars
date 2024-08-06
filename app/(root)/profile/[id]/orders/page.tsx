import OrderCard from "@components/OrderCard";
import { getOrdersByUser } from "@lib/actions/order.actions";
import React from "react";

const OrdersPage = async ({ params: { id } }: any) => {
  const userOrders = await getOrdersByUser({ userId: id, limit: 6, page: 1 });

  if (userOrders?.data) {
    userOrders.data.sort(
      (a: any, b: any) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    );
  }

  return (
    <div className="flex flex-col items-center gap-5">
      <h1 className="text-xl font-semibold">Your Orders</h1>
      <div>
        {userOrders?.data.length === 0 ? (
          <p>No orders found</p>
        ) : (
          userOrders?.data.map((order: any, index: any) => (
            <OrderCard key={index} order={order} />
          ))
        )}
      </div>
    </div>
  );
};

export default OrdersPage;
