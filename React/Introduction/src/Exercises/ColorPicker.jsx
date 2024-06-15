import React, {useState} from "react";
import styles from "./ColorPicker.module.css";

function ColorPicker() {
    const [color, setColor] = useState("#000000");

    function handleColorChange(e) {
        setColor(e.target.value);
    }

    return (
        <div className={styles.colorPickerContainer}>
            <h1>Color Picker</h1>
            <div className="color-display" style={{backgroundColor: color}}>
                <p>Color: {color}</p>
            </div>
            <label>Select a color:</label>
            <input type="color" value={color} onChange={handleColorChange}/>
        </div>
    )
}

export default ColorPicker