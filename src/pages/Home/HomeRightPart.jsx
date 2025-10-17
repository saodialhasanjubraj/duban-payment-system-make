import React from "react";
import PaymentMethoodCard from "../../components/PaymentMethoodCard";

const HomeRightPart = () => {
  return (
    <div className=" min-w-100">
      <h1 className="mb-2 font-semibold text-2xl">Payment Methood</h1>
      <div className="paymentMethoodCards flex flex-col gap-y-4 ">
        <PaymentMethoodCard
          name={"Zelle (Scan to Pay)"}
          cardImage={"https://i.postimg.cc/L8KbCV4x/image.png"}
        />
        <PaymentMethoodCard
          name={"Square | Credit/Debit Card Checkout"}
          cardImage={"https://i.postimg.cc/hv8pNktf/image.png"}
        />
        <PaymentMethoodCard
          name={"Stripe | Credit/Debit Card Checkout"}
          cardImage={"https://i.postimg.cc/bvKgryGZ/image.png"}
        />
        <PaymentMethoodCard
          name={"Venmo (Scan to Pay)"}
          cardImage={"https://i.postimg.cc/kXncBh5t/image.png"}
        />
        <PaymentMethoodCard
          name={"Paypal | Credit/Debit Card Checkout"}
          cardImage={"https://i.postimg.cc/VkhBZfWp/image.png"}
        />
        <PaymentMethoodCard
          name={"Cash"}
          cardImage={"https://i.postimg.cc/bw4kH6zq/image.png"}
        />
        <PaymentMethoodCard
          name={"Wire Transfer"}
          cardImage={"https://i.postimg.cc/xT4znsNn/image.png"}
        />
      </div>
    </div>
  );
};

export default HomeRightPart;
