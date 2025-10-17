import React, { use, useState } from "react";
import { StateDealContext } from "../pages/Root/Root";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

export const MembershipPaymentUpfree = ({ payment, type }) => {
  const { setPaymentState, paymentType, setPaymentType } =
    use(StateDealContext);
  const [cardClicked, setCardClicked] = useState(false);
  console.log(paymentType, "payment---type");
  return (
    <div
      onClick={() => {
        setPaymentState(payment);
        setCardClicked(!cardClicked);
        setPaymentType(type);
      }}
      className="flex w-full items-center justify-between bg-white py-8 px-5 rounded-2xl mb-5 hover:cursor-pointer "
    >
      <div className="flex items-center justify-between gap-x-2">
        <div className="h-5 w-5  rounded-full flex items-center justify-center">
          {cardClicked ? (
            <IoIosCheckmarkCircleOutline className="text-5xl" />
          ) : (
            ""
          )}
        </div>
        <h1 className="text-xl">Membership fee</h1>
        <button className="bg-blue-900 text-white px-5 py-1 text-sm rounded-md">
          {type}
        </button>
      </div>
      <h1>{payment} $</h1>
    </div>
  );
};
