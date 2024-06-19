/*
 * Imagine we want to perform an action when the window is resized. Without useEffect, 
 * events would be added indefintely if we do not remove them.
 * However, with useEffect, we have more control on when to add and remove events. 
 * For instance, we can add an event only when the component mounts or when the 
 * component mount and some prop changes.
 * Let's say we use the following code:
 * ```javascript
 * window.addEventListener("resize", {handleResize});
 * ```
 * By inspecting the dev tools in Chrome (see Elements > Event Listeners), we can see 
 * that a new event listenr is added on every resize. This is not good for performance.
 * useEffect will only add it once.
 */

import React, { useEffect, useState } from "react";

function SmartWindow() {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    // Add event listener when component mounts
    useEffect(() => {
        console.log("Event listener added");
        window.addEventListener("resize", handleResize);

        // Important: It is a good practice to remove event listeners when the component unmounts.
        return () => {
            console.log("Event listener removed");
            window.removeEventListener("resize", handleResize);
        }
    }, [])
    
    // Update title when width or height changes
    useEffect(() => {
        document.title = `SmartWindow: ${width} x ${height}`;
    }, [width, height])
    
    function handleResize() {
        setWidth(window.innerWidth);
    }

    return (
        <div>
            <h1>Window Width</h1>
            <p>{width}</p>
        </div>
    )
}

export default SmartWindow