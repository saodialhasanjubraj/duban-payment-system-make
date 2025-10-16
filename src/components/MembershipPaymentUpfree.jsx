import React, { useContext } from "react";
import { StateDealContext } from "../pages/Root/Root";

export const MembershipPaymentUpfree = ({ payment, type }) => {
  const [paymentState, setPaymentState] = useContext(StateDealContext);
  console.log(paymentState);

  return (
    <div
      onClick={() => {
        setPaymentState(payment);
      }}
      className="flex w-full items-center justify-between bg-white py-8 px-5 rounded-2xl mb-5 hover:cursor-pointer"
    >
      <div className="flex items-center justify-between gap-x-2">
        <input type="radio" name="" id="" className="" />
        <h1 className="text-xl">Membership fee</h1>
        <button className="bg-blue-900 text-white px-5 py-1 text-sm rounded-md">
          {type}
        </button>
      </div>
      <h1>{payment} $</h1>
    </div>
  );
};
