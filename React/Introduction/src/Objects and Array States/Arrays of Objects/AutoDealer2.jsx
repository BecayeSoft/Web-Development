import React, {useState} from "react";

function AutoDealer2() {

    const [cars, setCars] = useState([
        { id: 1, brand: "Toyota", model: "Corolla", year: 2021 },
        { id: 2, brand: "Honda", model: "Civic", year: 2021 },
        { id: 3, brand: "Ford", model: "Fusion", year: 2021 },
        { id: 4, brand: "Chevrolet", model: "Malibu", year: 2021 },
    ]);

    function handleAddCar(brand, model, year) {
        setCars([
            ...cars, 
            { id: cars.length + 1, brand: brand, model: model, year: year }
        ]);
    }

    function handleRemoveCar(id) {
        setCars(cars => {
            cars.filter((car) => car.id !== id)
        });
    }

    function handleCarChange(brand, model, year) {
        setCars({
            brand: brand,
            model: model,
            year: year
        });
    }

    return (
        <div>
            <h1>Auto Dealer</h1>
            <ul>
                {
                    cars.map((car, index) => (
                        <li key={index}>
                            {car.year} {car.brand} {car.model} &nbsp;
                            <button onClick={() => removeCar(car.id)}>Remove</button>
                        </li>
                    ))
                }
            </ul>

            <input type="text" placeholder="Enter Brand" 
                value={car.brand} 
                onChange={(e) => handleCarChange({...car, brand: e.target.value})} /> <br />
            <input type="text" placeholder="Enter Model" 
                value={car.model} 
                onChange={(e) => handleCarChange({...car, model: e.target.value})}/> <br />
            <input type="number" placeholder="Enter Year" 
                value={car.year} 
                onChange={(e) => handleCarChange({...car, year: e.target.value})}/> <br />
            <button onClick={() => addCar(car.brand, car.model, car.year)}>Add Car</button>
        </div>
    )
}

export default AutoDealer2