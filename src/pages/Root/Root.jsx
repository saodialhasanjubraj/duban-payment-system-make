import React, { createContext, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../Footer/Footer";

export const StateDealContext = createContext();
const Root = () => {
  const [paymentState, setPaymentState] = useState(0);
  const [paymentType, setPaymentType] = useState("");
  return (
    <StateDealContext
      value={{ paymentState, setPaymentState, paymentType, setPaymentType }}
    >
      <div className="w-full max-w-300 mx-auto">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </StateDealContext>
  );
};

export default Root;
