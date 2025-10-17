import React from "react";

const PaymentMethoodCard = ({ name, cardImage }) => {
  return (
    <div
      onClick={() => document.getElementById("my_modal_1").showModal()}
      className="w-100 items-center justify-between py-2 border-2 rounded-md border-gray-400 px-2 flex hover:cursor-pointer hover:shadow-2xl"
    >
      <h1>{name}</h1>
      <img src={cardImage} alt="" srcset="" className="h-7 w-12" />

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{name}</h3>
          <h1>Scan with your mobile device</h1>
          <p className="py-4">Ammount to pay</p>
          <h1>$50.00</h1>
          <h1>How to complete payment:</h1>
          <ol className="list-decimal">
            <li>Scan the QR code with your payment app.</li>
            <li>Complete the payment for $50.00.</li>
            <li>Take a screenshot of the payment confirmation.</li>
            <li>Take a screenshot of the payment confirmation.</li>
          </ol>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default PaymentMethoodCard;
