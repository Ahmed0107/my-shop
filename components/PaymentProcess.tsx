import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51MGZ1jIGKBdQVrl3Ybn6AFxevGSfEJ1PzbR7iAOlNSmmEoJesqXOwXlXDn07QMDbdHc9z58OhtQejfRHZDFEXQFl002D0c5yNN"
);

export default function PaymentProcess() {
  const options = {
    // passing the client secret obtained from the server
    clientSecret: "CLIENT_SECRET",
  };
  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm />
    </Elements>
  );
}
