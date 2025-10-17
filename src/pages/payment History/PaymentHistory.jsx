import React, { use } from "react";
import { StateDealContext } from "../Root/Root";

const PaymentHistory = () => {
  const { storeCardData, setStoreCardData } = use(StateDealContext);

  const newCard = [...storeCardData, storeCardData];
console.log(storeCardData)
  return (
    <div>
      <h1>Payment History</h1>

      {/* <div className="cards">{allCardData.map((e) => e.paymentType)}</div> */}
    </div>
  );
};

export default PaymentHistory;
