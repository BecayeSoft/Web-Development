# Events

Just like most of the concepts in React, events are pretty similar to JavaScript. We will study OnClick and OnChange here but there are other such as OnDoubleClick.

# OnClick

```jsx
function Button({ hideProfilePicture }) {

    let count = 0
    
    const handleClick = (event, name) => {
        if (count < 2) {
            count++
            console.log(`${name} you clicked me ${count} time/s`);
            hideProfilePicture()
        }
        else {
            console.log(`${name} stop clicking me!`)
            event.target.textContent = "OUCH! 😡"
        }
    } 

    return(
        <button onClick={
            (e) => handleClick(e, 'Bro')
        }>Don't CLick Me 😧</button>
    )
}
```

# OnChange

OnChange allows for more dynamic and interactive event. It is an event that is triggered when the value of a form element changes like input, select, or textarea.

```jsx
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
```