import React from "react";

const PaymentMethods = ({ selectedPaymentMethod }) => {
  return (
    <div className="my-4 text-center">
      <h2>Accepted Payment Methods</h2>
      <div className="d-flex justify-content-center align-items-center">
        <div className={`payment-method ${selectedPaymentMethod === "Banking" ? "active" : ""}`}>
          <img src="assets/Banking.png" alt="Banking" width="80" height="80" />
          <span>Banking</span>
        </div>
        <div className={`payment-method ${selectedPaymentMethod === "Credit Card" ? "active" : ""}`}>
          <img src="assets/creditcard.png" alt="Credit Card" width="80" height="80" />
          <span>Credit Card</span>
        </div>
        <div className={`payment-method ${selectedPaymentMethod === "PayPal" ? "active" : ""}`}>
          <img src="assets/paypal.png" alt="PayPal" width="80" height="80" />
          <span>PayPal</span>
        </div>
      </div>
      <style jsx>{`
        .payment-method {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 0 10px; /* Adjust margin as needed */
        }
        .payment-method img {
          margin-bottom: 5px;
        }
      `}</style>
    </div>
  );
};

export default PaymentMethods;
