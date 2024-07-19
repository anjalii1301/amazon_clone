import React, { useState } from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'

const Product = ({ id, title, price, image, rating }) => {
  const [state, dispatch] = useStateValue();
  let quantity = 1;

  const addtoCart = () => {

    dispatch({
      type: "add_to_cart",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
        quantity: quantity,
      },
    });
  };

  return (
    <div className="product">
      <div className="product_info">
        <p><strong>{title}</strong></p>
        <p className="product_price">
          Rs.
          <strong>{price}/-</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />


      <button onClick={addtoCart} >Add to Cart</button>
    </div>
  )
}

export default Product;
