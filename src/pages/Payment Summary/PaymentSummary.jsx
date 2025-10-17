import React, { use } from "react";
import { StateDealContext } from "../Root/Root";
import { ToastContainer, toast } from "react-toastify";
const PaymentSummary = () => {
  const { paymentState, paymentType, storeCardData, setStoreCardData } =
    use(StateDealContext);
  console.log(paymentState, "payment state");
  const notify = () =>
    toast(
      "You successfully pay " +
        paymentState +
        "$ & your payment type: " +
        paymentType
    );
  return (
    <div className="bg-white py-10 px-10 flex flex-col gap-y-2 rounded-2xl">
      <h1>Payments Summary</h1>

      <div>
        {paymentType == "Upfront" ? (
          <div>
            <div className="plan flex items-center justify-between my-1">
              <h1>Select Plan</h1>
              <h1>{paymentType}</h1>
            </div>
            <div className="installmentSetps flex items-center justify-between">
              <h1>installments</h1>
              <h1>10 X $ {paymentState / 10}</h1>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className="flex items-center justify-between">
        <h1>
          Membership Fee <small className="font-bold"> {paymentType}</small>
        </h1>
        <h1>{paymentState} $</h1>
      </div>
      <div className="flex items-center justify-between border-b-2 pb-0.5">
        <h1>Registered Member</h1>
        <h1>Yearly Member</h1>
      </div>

      <div className="totalPayment flex items-center justify-between">
        <h1>Total Payable Ammount</h1>
        <h1>{paymentState}</h1>
      </div>
      <button
        onClick={() => {
          notify(), setStoreCardData(paymentType, paymentState);
        }}
        className="bg-blue-800 text-white w-full py-1 hover:bg-red-800 rounded-sm duration-300"
      >
        Pay Now
      </button>
      <ToastContainer />
    </div>
  );
};

export default PaymentSummary;
