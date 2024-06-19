/**
 * useEffect
 * useEffect is a hook that allows you to run some code after one of the following:
 * 1. The component renders for the first time.
 * 2. The component updates.
 * 3. The component unmounts.
 * 
 * Three ways to use useEffect:
 * 1. useEffect(() => {}) - Run after every render
 * 2. useEffect(() => {}, []) - Run once after the component mounts
 * 3. useEffect(() => {}, [someValue]) - Run after the component mounts and someValue changes
 * 
 * Important:
 * Do not use setState inside useEffect() without a dependency array. This will cause an infinite loop.
 * Example:
 * ```javascript
 * useEffect(() => {
 *    setState("some value");       // BAD: This will cause an infinite loop
 * }
 */

import React, { useEffect, useState } from "react";

function SmartCar() {
    
        const [car, setCar] = useState({
            brand: "Toyota",
            model: "Corolla",
            year: 2021
        });
        const [fontColor, setFontColor] = useState("black");
        const [isCarOn, setIsCarOn] = useState(true);

        // "Car is on" is printed twice because we have strict mode enabled.
        useEffect(() => {
            if (isCarOn) console.log("Car is on");
            else console.log("Car is off");
        })

        useEffect(() => {
            changeFontColor();
        }, [isCarOn])

    
        const toggleCarOn = () => {
            setIsCarOn(!isCarOn);
        }

        const changeFontColor = () => {
            setFontColor(c => c === "black" ? "red" : "black");
        }
    
        return (
            <div style={ {color: fontColor} }>
                <h1>Smart Car</h1>
                {
                    isCarOn && 
                    <div>
                        <p>{car.year} {car.brand} {car.model}</p>
                    </div>
                }
                <button onClick={toggleCarOn}>On/Off</button>
            </div>
        )
    }

export default SmartCar