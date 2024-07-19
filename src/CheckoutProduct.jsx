import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'


const CheckoutProduct = ({ id, image, title, price, rating, quantity }) => {

  const [state, dispatch] = useStateValue();

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    const setQuantity = (newQuantity) => {
      quantity = newQuantity;
    };
    setQuantity(newQuantity);

    dispatch({
      type: 'quantity',
      payload: {
        item: {
          id: id,
          quantity: newQuantity
        }
      }
    }, [dispatch]);
  };

  const removefromCart = () => {
    dispatch({
      type: 'remove_from_cart',
      id: id,
    })
  }

  const updatedPrice = quantity > 4 ? price * 0.75 : price;
  return (
    <div className='checkoutProduct'>
      <img className="checkoutProduct_img" src={image} alt="" />

      <div className="checkoutProduct_info">

        <p className="checkoutProduct_title">
          {title}
        </p>


        <div className="checkoutProduct_rating">
          {Array(rating).fill().map((_, i) => (<p>🌟</p>))}
        </div>

        <div className="checkoutProduct_quantity">
          <label for="quantity">Quantity : </label>
          <select value={quantity} onChange={handleQuantityChange}>
            {[...Array(10).keys()].map(i => (
              <option key={i + 1} value={i + 1}>{i + 1}</option>
            ))}
          </select>

        </div>

        <button onClick={removefromCart}>Remove from Cart</button>
      </div>

      {quantity > 4 && (
        <div className="checkoutProduct_discount">
          <p>Flat 25% Off</p>
          <p> <small>On product quantity more than 4</small> </p>
          <p>   <strong>Rs.{updatedPrice}</strong></p>
        </div>
      )}

      <div className="checkoutProduct_price">
        <strong>Rs.{price}</strong>
      </div>

    </div>
  )
}

export default CheckoutProduct;
