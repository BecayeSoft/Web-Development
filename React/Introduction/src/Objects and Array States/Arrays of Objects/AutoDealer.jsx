import React, { useState } from "react";

function AutoDealer() {

    const [cars, setCars] = useState([]);
    const [carBrand, setCarBrand] = useState("");
    const [carModel, setCarModel] = useState("");
    const [carYear, setCarYear] = useState(new Date().getFullYear());

    function handleAddCar() {

        const newCar = {
            // id: cars.length + 1,
            brand: carBrand,
            model: carModel,
            year: carYear
        };

        setCars(prevCars => [...prevCars, newCar]);

        setCarBrand("");
        setCarModel("");
        setCarYear(new Date().getFullYear());
    }

    function handleBrandChange(e) {
        setCarBrand(cb => e.target.value);
    }

    function handleModelChange(e) {
        setCarModel(e.target.value);
    }

    function handleYearChange(e) {
        setCarYear(e.target.value);
    }
    
    function handleRemoveCar(index) {
        setCars(prevCars => prevCars.filter((ca_, i) => i !== index));
    }

    return (
        <div>
            <h1>Bec-cars</h1>
            <h4>The bec-t cars every made!</h4>
            
            <ul>
                {
                    cars.map( (car, index) => {
                        return (
                            <li key={index} onClick={() => handleRemoveCar(index)}>
                                {car.year} {car.brand} {car.model}
                            </li>
                        )
                    })
                }
            </ul>

            <input type="number"
            value={carYear} onChange={handleYearChange} /> <br />
            <input type="text" placeholder="Enter Brand" 
            value={carBrand} onChange={handleBrandChange} /> <br />
            <input type="text" placeholder="Enter Model"
            value={carModel} onChange={handleModelChange} /> <br />
            
            <button onClick={handleAddCar}>Add Car</button>

        </div>
    )

}

export default AutoDealer