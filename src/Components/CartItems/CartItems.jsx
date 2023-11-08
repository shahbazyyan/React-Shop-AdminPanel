import React, { useContext } from 'react';
import './Cartitems.css';
import { ShopContext } from '../../Context/ShopContext';
import remove from '../Assets/cart_cross_icon.png';




function CartItems() {
    const {getTotalCartAmount, all_product, cartItem, removeToCart} = useContext(ShopContext);
  return (
    <div className='cartitems'>
        <div className="cartitems-format-main">
           <p>Products</p>
           <p>Title</p>
           <p>Price</p>
           <p>Quantity</p>
           <p>Total</p>
           <p>Remove</p>
        </div>
        <hr />
       {all_product.map((e) => {
        if (cartItem[e.id] > 0) {
            return <div>
            <div className="cartitems-format cartitems-format-main">
                <img className='carticon-product-icon' src={e.image} alt="img" />
                <p>{e.name}</p>
                <p>{e.new_price}</p>
                <button className='cartitems-quantity'>{cartItem[e.id]}</button>
                <p>${Number(e.new_price * cartItem[e.id])}</p>
                <img className='cartitems-remove-icon' src={remove} alt="img" onClick={() => {removeToCart(e.id)}} />
            </div>
            <hr />
        </div>
        }
        return null;
       })}
       <div className="cartitems-down">
         <div className="cartitems-total">
            <h1>Shop Totals</h1>
            <div>
                <div className="cartitems-total-item">
                    <p>Subtotal</p>
                    <p>$ {getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                    <p>Shiping Fee</p>
                    <p>Free</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                    <h3>Total</h3>
                    <h3>$ {getTotalCartAmount()}</h3>
                </div>
            </div>
            <button>GO TO CHECKOUT</button>
         </div>
         <div className="cartitems-promocode">
            <p>If you have a promo code, Enter it here</p>
            <div className="cartitem-promobox">
                <input type="text" placeholder='promo code' />
                <button>Submit</button>
            </div>
         </div>
       </div>
    </div>
  )
}

export default CartItems