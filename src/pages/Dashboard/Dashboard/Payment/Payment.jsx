import { Elements } from "@stripe/react-stripe-js";
import useClass from "../../../../hooks/useClass";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Helmet } from "react-helmet-async";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_Pk);
const Payment = () => {
  const [Classes] = useClass();
  const total = Classes.reduce(
    (sum, item) => parseFloat(item.price) + parseFloat(sum),
    0
  );
  const price = parseFloat(total.toFixed(2));
  return (
    <div className="w-full">
       <Helmet>
        <title>Captured Moments Institute || payment</title>
      </Helmet>
      <h2 className="text-center text-4xl">Payment Now</h2>
      <Elements stripe={stripePromise}>
        <CheckoutForm ClassesCart={Classes} price={price}></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
