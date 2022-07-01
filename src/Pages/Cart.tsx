import { useCart } from "react-use-cart";
import { useNavigate } from 'react-router-dom';

export const CART = () => {
    const {
      isEmpty,
      totalItems,
      items,
      updateItemQuantity,
      removeItem,
      cartTotal,
      emptyCart
    } = useCart();

  const navigate = useNavigate();

  if(isEmpty) <p className="empty_cart"> An empty shopping basket is a lonely shopping basket.

  Go on, add something! </p>

  return(
    <div className="cart_wrapper">
        <div className="cart_heading"> My Cart </div>
        <div className="cart_wrapper_container">
        <div className="cart_content_wrapper">
        {
          items.map((item)=> {
            
            const Quantity = item.quantity as number;
            
            return (
              <div className="content_wrapper" key={item.id}>
              <div className="item_description">
                <img 
                  src={item.productPhoto[0].url} 
                  alt="" 
                  height={100}
                  width={100}
                />
                <span> {item.name} </span>
              </div>
              <div className="buttons_wrapper">
                <div className="quantity">
                  <button 
                    onClick={() => updateItemQuantity(item.id, (Quantity - 1))}
                    className="subtract_button"
                    > - </button>
                  <span> {Quantity} </span>
                  <button
                    onClick={() => updateItemQuantity(item.id, (Quantity + 1))}
                    className="add_button"
                  > + </button>
                </div>
                <div className="remove_item">
                  <button
                    onClick={() => removeItem(item.id)}
                    className="trash_button"
                  > x </button>
                </div>
                </div>
              <div className="price"> R {item.price} </div>
              </div>
            )
          })
        }
        </div>
        <div>
          <div className="order_summary_wrapper">
            <div className="items_summary_wrapper">
              <span> <strong>Total Items</strong> {totalItems} </span>
              <span> R {cartTotal} </span>
            </div>
            <div className="shipping_details">
              <span> Shipping </span>
            </div>
            <div className="total_price">

            </div>
            <div>
              <button 
                className="checkout_button"
              > 
                checkout 
              </button>
            </div>  
          </div>
        </div>
        <div className="cart_buttons">
          <button
            onClick={ () => navigate(-1)}
            className="back_button"
          > 
            Continue shopping 
          </button>
          <button
            onClick={ () => emptyCart() }
            className="trash_button"
          >
            Empty Cart
          </button>
        </div>
        </div>
    </div>
  );
}