import React, {useState} from "react";

function SmartHome() {

    const [devices, setDevices] = useState([
        "Fan", "Air Purifier", "Smart TV", "Smart Speaker"
    ]);

    function addDevice(device) {
        setDevices([...devices, device]);
    }

    function removeDevice(device) {
        setDevices(devices.filter((d) => d !== device));
    }

    return (
        <div>
            <h1>Smart Home Devices</h1>
            <ul>
                {
                    devices.map((device, index) => (
                        <li key={index}>
                            {device} &nbsp;
                            <button onClick={() => removeDevice(device)}>Remove</button>
                        </li>
                    ))
                }
            </ul>
            <button onClick={() => addDevice("Smart Light")}>Add Device</button>
        </div>
    )
}

export default SmartHome