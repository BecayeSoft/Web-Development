# useEffect

useEffect is a hook that allows you to run some code after one of the following:

1. The component renders for the first time.
2. The component updates.
3. The component unmounts.

Three ways to use useEffect:

1. useEffect(() => {}) - Run after every render
2. useEffect(() => {}, []) - Run once after the component mounts
3. useEffect(() => {}, [someValue]) - Run after the component mounts and someValue changes

> ⚠️Do not use setState inside useEffect() without a dependency array. This will cause an infinite loop. (See example below).

```javascript
useEffect(() => {
   setState("some value");       // BAD: This will cause an infinite loop
}
```

## Why useEffect?

Imagine we want to perform an action when the window is resized. Without useEffect, events would be added indefintely if we do not remove them.
However, with useEffect, we have more control on when to add and remove events. 

For instance, we can add an event only when the component mounts or when the component mount and some prop changes.

Let's say we use the following code:

```javascript
window.addEventListener("resize", {handleResize});
```

By inspecting the dev tools in Chrome (see Elements > Event Listeners), we can see  that a new event listenr is added on every resize. This is not good for performance. useEffect will only add it once.