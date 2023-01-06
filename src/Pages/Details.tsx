import { useLocation, useNavigate } from 'react-router-dom';
import { ITEM_TYPE } from '../generated/categories_generated';
import { FaPaypal, FaCcVisa, FaCcMastercard } from 'react-icons/fa';
import { useCart } from 'react-use-cart';

interface PRODUCT_IF {
    item: ITEM_TYPE;
    category_name: string;
}

export const DETAILS = () => {
    const location = useLocation();
    const product = location.state as PRODUCT_IF;
    const {item, category_name} = product;

    const navigate = useNavigate();

    const { addItem } = useCart();

    return (
        <div className="details_container">
            <div className="details_wrapper">
                <div className="main_image">
                    <img                             
                        src={item.productPhoto[0].url} 
                        alt=""
                        height={400}
                        width={350} 
                    />
                </div>
                <div className="sub_images">
                    {
                        item.productPhoto.map((photo)=> (
                            <div className="sub_images_wrapper" key={photo.id}>
                                <img 
                                src={photo.url} 
                                alt="" 
                                height={75}
                                width={75}
                                />
                            </div>
                        ))
                    }
                </div>
                <div className="main_title">
                    <span> {item.name} </span>
                    <span> {item.availability ? `R ${item.price}` 
                            : <span className='sold_out'>sold out</span>} 
                    </span>
                    <span> Free shipping for orders above R 2500.00</span>
                    <span> <strong>Shipping</strong> calculated at checkout. </span>
                    <button 
                        className={ item.availability ? "cart_button" : "cart_button_disabled" }
                        onClick={ () => addItem(item)}
                    >
                        Add to Cart
                    </button>
                    <div className="payment_methods">
                        <div className="payment_methods_title"> Secure and trusted checkout with:</div>
                        <div>
                            <span> <FaCcMastercard /> </span>
                            <span> <FaCcVisa /> </span>
                            <span> <FaPaypal /> </span>
                        </div>
                    </div>
                </div>
                <div className="product_description">
                    {item.productDescription}
                </div>
            </div>
            <div className="back_button_wrapper">
                <button
                    onClick={()=>navigate(-1)}
                    className="back_button"
                >
                    <span>Back to {category_name}</span>
                </button>
            </div>
        </div>
    );
}