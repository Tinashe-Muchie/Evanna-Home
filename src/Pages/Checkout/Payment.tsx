import { loadStripe } from "@stripe/stripe-js";
import { Elements, 
    CardElement, 
    useStripe, 
    useElements } from "@stripe/react-stripe-js";
import { useCart } from "react-use-cart";

const stripePromise = loadStripe('pk_test_51LGiq1I7VvZOo4gg8OPvK9PwWCY78TnMm4LjH9PMbDEhH5hjSLI9LmxxBEVcPVUhKBfLy7miu9qjRJ7xr2n2bHJr00QnhAInPb');

const CheckoutForm = ({next, previous}: {next: ()=>void, previous: ()=> void}) => {
    const stripe = useStripe();
    const elements = useElements();

    const { cartTotal } = useCart();

    return (
        <form className="payment_wrapper">
            <CardElement />
            <div className="buttons_wrapper">
                <button
                    onClick={()=> previous()}
                    className="back_button"
                >
                    Back
                </button>
                <button
                    type="submit"
                    disabled={!stripe || !elements}
                    onClick={()=> next()}
                    className="next_button"
                > Pay R {cartTotal}
                </button>
            </div>    
        </form>
    );
}

export const PAYMENT = ({next, prev}: any) => {
    return (
        <Elements stripe={stripePromise}>
            <CheckoutForm next={next} previous={prev}/>
        </Elements>
    );
};