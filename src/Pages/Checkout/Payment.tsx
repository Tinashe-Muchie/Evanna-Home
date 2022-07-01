import { loadStripe } from "@stripe/stripe-js";
import { Elements, 
    CardElement, 
    useStripe, 
    useElements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe('pk_test_51LGiq1I7VvZOo4gg8OPvK9PwWCY78TnMm4LjH9PMbDEhH5hjSLI9LmxxBEVcPVUhKBfLy7miu9qjRJ7xr2n2bHJr00QnhAInPb');

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    return (
        <form>
            <CardElement />
            <button
                type="submit"
                disabled={!stripe || !elements}
            > Pay 
            </button>
        </form>
    );
}

export const PAYMENT = ({next, previous, timeout}: any) => {
    return (
        <Elements stripe={stripePromise}>
            <CheckoutForm />
        </Elements>
    );
};