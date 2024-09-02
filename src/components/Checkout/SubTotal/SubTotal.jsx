import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../../StateProvider";
import { getBasketTotal } from "../../../reducer";
import { useNavigate } from "react-router-dom";


const SubTotal = () => {

  const navigateTo = useNavigate();
  const [{ basket }, dispatch] = useStateValue();

 

  const calculateItemDiscount = (item) => {
    return item.quantity > 4 ? 0.25 * item.price * item.quantity : 0;
  };

  const calculateTotalDiscount = (basket) => {
    return basket.reduce((totalDiscount, item) => {
      return totalDiscount + calculateItemDiscount(item);
    }, 0);
  };

  const discount = calculateTotalDiscount(basket);
  const basketTotal = getBasketTotal(basket);
  const totalAfterDiscount = basketTotal - discount;

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.reduce((total, item) => total + item.quantity, 0)} items): <strong>{value}</strong>
            </p>
            <div className="subtotal_discount">
              {basket.map((item) => {
                const itemDiscount = calculateItemDiscount(item);
                return (
                  itemDiscount > 0 && (
                    <div key={item.id} className="subtotal_discountOffer">
                      <small>
                        <p>Discount on {item.title} (25% off) of  Rs. {itemDiscount.toFixed(2)}</p>
                      </small>
                    </div>
                  )
                );
              })}
            </div>
            <small className="subtotal_gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={totalAfterDiscount}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"Rs. "}
      />
      <button onClick={(e) => navigateTo("/payment")}>Proceed to Pay</button>
    </div>
  );
}


        export default SubTotal;
