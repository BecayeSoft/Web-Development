# Updater Functions

Updater functions are functions passed to setState() functions to update the state of a component in a "safer" way. It is a good practice used with multiple state updates and asynchronous functions. They are basically arrow function use in hooks.

🤔 Why use an updater?

Say for instance, we have a counter equal to 0 and we run the following code:

```jsx
updateCounter() {
	setCount(count + 1)
	setCount(count + 1)
	setCount(count + 1)
}
```

We will get 1 as a result in our HTML view because the state is updated asynchronously and the value of count is not updated immediately. That’s why use arrow functions as updater.

```jsx
import React, {useState} from "react";

function Counter() {
    const [count, setCount] = useState(0);

    function increment() {
        setCount(c => c + 1);
        // setCount(c => c + 1);
        // setCount(c => c + 1);
    }

    function decrement() {
        setCount(c => c - 1);
        setCount(c => c - 1);
        setCount(c => c - 1);
    }

    function reset() {
        setCount(0);
    }

    return (
        <div>
            <h1>Counter</h1>
            <p>{count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default Counter
```