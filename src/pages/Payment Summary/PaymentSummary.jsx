import React, { useContext } from "react";
import { StateDealContext } from "../Root/Root";

const PaymentSummary = () => {
  const [paymentState] = useContext(StateDealContext);
  return (
    <div className="bg-white py-10 px-10 flex flex-col gap-y-2 rounded-2xl">
      <h1>Payments Summary</h1>
      <div className="flex items-center justify-between">
        <h1>Membership Fee</h1>
        <h1>{paymentState} $</h1>
      </div>
      <div className="flex items-center justify-between">
        <h1>Registered Member</h1>
        <h1>Yearly Member</h1>
      </div>

      <div className="totalPayment flex items-center justify-between">
        <h1>Total Payable Ammount</h1>
        <h1>100$</h1>
      </div>
      <button className="bg-blue-800 text-white w-full py-1 hover:bg-red-800 rounded-sm duration-300">
        Pay Now
      </button>
    </div>
  );
};

export default PaymentSummary;
