import React from "react";

const PaymentMethoodCard = ({ name, cardImage }) => {
  return (
    <div className="w-100 items-center justify-between py-2 border-2 rounded-md border-gray-400 px-2 flex ">
      <h1>{name}</h1>
      <img src={cardImage} alt="" srcset="" className="h-7 w-12" />
    </div>
  );
};

export default PaymentMethoodCard;
