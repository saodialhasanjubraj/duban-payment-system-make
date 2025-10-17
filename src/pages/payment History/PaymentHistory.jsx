import React, { use } from "react";
import { StateDealContext } from "../Root/Root";

const PaymentHistory = () => {
  const { storeCardData } = use(StateDealContext);
  const newAddedCard = storeCardData;
  const newCard = [...newAddedCard, storeCardData];
  console.log(newCard, "new card dont show");
  return (
    <div>
      <h1>Payment History</h1>
    </div>
  );
};

export default PaymentHistory;
