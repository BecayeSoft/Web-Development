/**
 * OnChange is an event that is triggered when the value of a form element changes 
 * (input, select, or textarea).
 */

import React, { useState } from 'react';

function OnChange() {
    const [product, setProduct] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("Delivery");

    function handleProductChange(e) {
        setProduct(e.target.value);
    }

    function handleQuantityChange(e) {
        setQuantity(e.target.value);
    }

    function handlePaymentChange(e) {
        setPayment(e.target.value);
    }

    return (
        <>
            <input type="text" value={product} onChange={handleProductChange}/>
            <p>Product: {product}</p>

            <input type="number" value={quantity} onChange={handleQuantityChange}/>
            <p>Quantity: {quantity}</p>

            <select value={payment} onChange={handlePaymentChange}>
                <option value="Select a metohd">Select Payment Method</option>
                <option value="Cash">Cash</option>
                <option value="Credit Card">Credit Card</option>
                <option value="Mobile Money">Mobile Money</option>
            </select>
            <p>Payment Method: {payment}</p>


            <label>
                Pickup
                <input 
                    type="radio" name="shipping" value="Pick Up"
                    checked={shipping === "Pick Up"}
                    onChange={(e) => setShipping(e.target.value)}/>
            </label>

            <label>
                Delivery
                <input 
                    type="radio" name="shipping" value="Delivery"
                    checked={shipping === "Delivery"}
                    onChange={(e) => setShipping(e.target.value)}/>
            </label>

            <p>Shipping: {shipping}</p>
        </>
    );
}

export default OnChange;