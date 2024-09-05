import React from "react";

const OrderCard = ({ order }: any) => {
  console.log(order);

  return (
    <div className="car-card group flex w-96 justify-center gap-5 border shadow-sm">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {order.carMake} {order.carModel}
        </h2>
        <div>
          <p className="flex text-[32px] font-extrabold leading-[38px]">
            <span className="self-start text-[14px] font-semibold leading-[17px]">
              $
            </span>
            {order.totalCost}
          </p>
          <div className="flex">
            <p className="text-[14px] font-medium leading-[17px]">
              ${order.carRent} /day
            </p>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col items-center gap-2">
        <p>Start Date: {new Date(order.startDate).toLocaleDateString()}</p>
        <p>Number of Days: {order.numberOfDays}</p>
        <p>Total Cost: ${order.totalCost}</p>
      </div>
    </div>
  );
};

export default OrderCard;
