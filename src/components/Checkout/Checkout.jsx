import React from 'react'
import './Checkout.css'
import SubTotal from '../Checkout/SubTotal/SubTotal'
import { useStateValue } from '../../StateProvider'
import CheckoutProduct from '../Checkout/CheckoutProduct/CheckoutProduct'
import { getBasketTotal } from '../../reducer'
import CurrencyFormat from 'react-currency-format'

const Checkout = () => {

  const [{ basket, user }, dispatch] = useStateValue();


  return (
    <div className='checkout'>
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <div>
          <h2 className="checkout_title">
            Your Shopping Cart
          </h2>
          {basket.map(item => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
              quantity={item.quantity}
            />
          ))}
        </div>

        <div className="checkout_total">
          <CurrencyFormat
            renderText={(value) => (
              <>
                <p> Subtotal: {value}</p>

              </>
            )}

            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"Rs. "}
          />
        </div>
      </div>


      <div className="checkout_right">
        <SubTotal />
      </div>
    </div>
  )
}

export default Checkout 
