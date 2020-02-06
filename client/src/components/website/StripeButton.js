import React from "react";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";

export default function StripeButton({ price }) {
  const publishableKey = "pk_test_ncv3ixvDac5M4m1psL4nhaee002b3BpDH1";

  const onToken = async token => {
    try {
      await axios.post("/api/payment", { amount: price * 100, token });
      alert("Payment successful");
    } catch (error) {
      console.log(error);
      alert("Payment failed, please enter correct card info");
    }
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CLOSET SEVEN"
      billingAddress
      shippingAddress
      description={`Your total is $${price}`}
      amount={price * 100}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
}
