import React from 'react';
import './Payment.css'
import { useStateValue } from '../../StateProvider';
import CheckoutProduct from '../Checkout/CheckoutProduct/CheckoutProduct';
import CurrencyFormat from "react-currency-format";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { getBasketTotal } from '../../reducer';

const Payment = () => {
    const [{ basket, user }, dispatch] = useStateValue();
    const [selectedPayment, setSelectedPayment] = useState('');

    const handlePaymentChange = (e) => {
        setSelectedPayment(e.target.value);
    };

    const handleSubmit = (e) => {

    }

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
        <div className='payment'>
            <div className="payment_container">
                <h1>Checkout <Link to='/checkout'>({basket.reduce((total, item) => total + item.quantity, 0)} items)
                </Link>
                </h1>
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment_address">
                        <p>{user?.email}</p>
                        <p>Pincode: 483225</p>
                        <p>House no. 6 Adarsh Nagar </p>
                        <p>Sagar, M.P.</p>
                    </div>
                </div>

                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Review Items and Delivery</h3>
                    </div>
                    <div className="payment_items">
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                                quantity={item.quantity}
                            />
                        )
                        )}
                    </div>
                </div>

                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment_method">
                        <form onSubmit={handleSubmit}>
                            <div className="payment-option">
                                <label>
                                    <input
                                        type="radio"
                                        name="payment"
                                        value="credit-card"
                                        onChange={handlePaymentChange}
                                    />
                                    Credit or Debit Card
                                </label>
                                {selectedPayment === 'credit-card' && (
                                    <div className="payment-details">
                                        <label htmlFor="cc-number">Card Number:</label>
                                        <input type="text" id="cc-number" name="cc-number" /><br />
                                    </div>
                                )}
                            </div>

                            <div className="payment-option">
                                <label>
                                    <input
                                        type="radio"
                                        name="payment"
                                        value="paypal"
                                        onChange={handlePaymentChange}
                                    />
                                    UPI Apps
                                </label>
                                {selectedPayment === 'paypal' && (
                                    <div className="payment-details">
                                        <label htmlFor="paypal-email"> UPI Id</label>
                                        <input type="email" id="paypal-email" name="paypal-email" /><br />
                                    </div>
                                )}
                            </div>

                            <div className="payment-option">
                                <label>
                                    <input
                                        type="radio"
                                        name="payment"
                                        value="bank-transfer"
                                        onChange={handlePaymentChange}
                                    />
                                    Bank Transfer
                                </label>
                                {selectedPayment === 'bank-transfer' && (
                                    <div className="payment-details">
                                        <label htmlFor="bank-account">Net Banking</label>
                                        <input type="text" id="bank-account" name="bank-account" /><br />
                                        <label htmlFor="bank-routing">Account Number:</label>
                                        <input type="text" id="bank-routing" name="bank-routing" /><br />
                                    </div>
                                )}

                            </div>

                            <div className="payment_priceContainer">
                                <div className="payment_priceContainerTitle">
                                    <strong>Order Summary</strong>
                                </div>
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <>
                                            {discount > 0 && <p>Total price: {value}</p>}

                                        </>
                                    )}

                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"Rs. "}
                                />

                                <div className="discount_total">
                                    {basket.map((item) => {
                                        const itemDiscount = calculateItemDiscount(item);
                                        return (
                                            itemDiscount > 0 && (
                                                <div key={item.id} className="subtotal_discount">
                                                    <small>
                                                        <p>Discount on {item.title} (25% off) of : Rs. {itemDiscount.toFixed(2)}</p>
                                                    </small>
                                                </div>
                                            )
                                        );
                                    })}
                                </div>

                                <div className="amount_pay">
                                    <CurrencyFormat
                                        renderText={(value) => (
                                            <>
                                                <p>
                                                    {discount > 0 && 'After Discount'} Order Total ({basket.reduce((total, item) => total + item.quantity, 0)} items): <strong>{value}</strong>
                                                </p>

                                            </>
                                        )}
                                        decimalScale={2}
                                        value={totalAfterDiscount}
                                        displayType={"text"}
                                        thousandSeparator={true}
                                        prefix={"Rs. "}
                                    />
                                </div>



                            </div>
                            <div className='pay_button'>
                                <button >Place your order</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment;
