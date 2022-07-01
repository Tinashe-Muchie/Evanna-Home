import { NavLink } from 'react-router-dom';

export const CONFIRMATION = ({Done}:any) => {
    return (
        <div className="confirmation_wrapper">
            <div className="confirmation_heading">
                <span>Confirmation</span>
                <span>Your order confirmation!</span>
            </div>
            <span> Thank you for shopping at Evanna Homeware </span>
            
            <div className="button_wrapper">
                <NavLink to='/'>
                    <button>
                        Continue Shopping
                    </button>
                </NavLink>
            </div>
        </div>
    );
}