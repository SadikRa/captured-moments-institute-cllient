import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";
import './CheckoutForm.css'
import Swal from "sweetalert2";


// eslint-disable-next-line react/prop-types
const CheckoutForm = ({ ClassesCart, price }) => {
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const [cardError, setCardError] = useState("");
    const [clientSecret, setClientSecret] = useState("");
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState("");
  
    useEffect(() => {
      if (price > 0) {
        axiosSecure
          .post("/create-payment-intent", { price })
          .then((res) => {
            console.log(res.data.clientSecret);
            setClientSecret(res.data.clientSecret);
          });
      }
    }, [price, axiosSecure]);
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      if (!stripe || !elements) {
        return;
      }
  
      const card = elements.getElement(CardElement);
      if (card === null) {
        return;
      }
  
      const { error } = await stripe.createPaymentMethod({
        type: "card",
        card,
      });
  
      if (error) {
        console.log("error", error);
        setCardError(error.message);
      } else {
        setCardError("");
      }
  
      setProcessing(true);
  
      const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: card,
            billing_details: {
              email: user?.email || "unknown",
              name: user?.displayName || "anonymous",
            },
          },
        }
      );
  
      if (confirmError) {
        console.log(confirmError);
      }
  
      console.log("payment intent", paymentIntent);
      setProcessing(false);
      if (paymentIntent.status === "succeeded") {
        setTransactionId(paymentIntent.id);
        const payment = {
          email: user?.email,
          transactionId: paymentIntent.id,
          price,
          date: new Date(),
          // eslint-disable-next-line react/prop-types
          quantity: ClassesCart.length,
          // eslint-disable-next-line react/prop-types
          ClassesCartItems: ClassesCart.map((item) => item._id),
          // eslint-disable-next-line react/prop-types
          ClassNames: ClassesCart.map((item) => item.className),
        };
        axiosSecure.post("/payments", payment).then((res) => {
          if (res.data.insertResult.insertedId) {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'enrolled success.',
                showConfirmButton: false,
                timer: 1500
              })
          }
        });
      }
    };

  return (
    <>
      <form className="w-2/3 m-8" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-primary btn-sm mt-4"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
      {transactionId && (
        <p className="text-green-500">
          Transaction complete with transactionId: {transactionId}
        </p>
      )}
    </>
  );
};

export default CheckoutForm;
