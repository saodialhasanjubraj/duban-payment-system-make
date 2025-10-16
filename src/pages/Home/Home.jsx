import React from "react";
import HomeLeftPart from "./HomeLeftPart";
import HomeRightPart from "./HomeRightPart";
import PaymentSummary from "../Payment Summary/PaymentSummary";

const Home = () => {
  return (
    <div>
      <h1 className="w-full text-2xl bg-white py-8 rounded-xl mt-5 pl-10 font-semibold">
        Complete your payment
      </h1>
      <div className="homeTowParts flex items-start justify-between gap-x-3 mt-10">
        <HomeLeftPart />
        <HomeRightPart />
      </div>
      <PaymentSummary/>
    </div>
  );
};

export default Home;
