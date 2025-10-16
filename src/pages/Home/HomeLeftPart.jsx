import React from "react";
import { MembershipPaymentUpfree } from "../../components/MembershipPaymentUpfree";

const HomeLeftPart = () => {
  return (
    <div className="w-full">
      <h1 className="text-xl mb-5">General Member</h1>
      <MembershipPaymentUpfree payment={0} type={"Free"} />
      <h1 className="text-xl mb-5 mt-2">Life Member</h1>
      <MembershipPaymentUpfree payment={500} type={"Upfront"} />
      <MembershipPaymentUpfree payment={1200} type={"Yearly"} />
      <h1 className="text-xl mb-5 mt-2">Yearly Member</h1>
      <MembershipPaymentUpfree payment={5000} type={"Upfront"} />
      <MembershipPaymentUpfree payment={500} type={"Yearly"} />
    </div>
  );
};

export default HomeLeftPart;
