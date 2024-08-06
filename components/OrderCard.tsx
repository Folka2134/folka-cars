import React from "react";

const OrderCard = ({ order }: any) => {
  console.log(order);

  return (
    <div className="flex w-96 justify-center gap-5 border shadow-sm">
      <h2>
        {order.carMake} {order.carModel}
      </h2>
      <div className="flex flex-col gap-2">
        <p>Start Date: {new Date(order.startDate).toLocaleDateString()}</p>
        <p>Number of Days: {order.numberOfDays}</p>
        <p>Total Cost: ${order.totalCost}</p>
      </div>
    </div>
  );
};

export default OrderCard;
