import React, {useState} from "react";

function FavoriteCar() {
    const [car, setCar] = useState({
        brand: "Toyota",
        model: "Corolla",
        year: 2021
    });

    //  change the car with the given values
    function handleCarChange(brand, model, year) {
        setCar({
            brand: brand,
            model: model,
            year: year
        });
    }

    return (
        <div>
            <h1>My Favorite Car</h1>
            <p>Your favorite car is a {car.year} {car.brand} {car.model}.</p>

            {/* <button onClick={changeCar}>Change Car</button> */}
            {/* <input type="text" value={car.brand} onChange={(e) => setCar({...car, brand: e.target.value})} /> */}

            <input type="text" value={car.brand} onChange={(e) => handleCarChange({...car, brand: e.target.value})} /> <br />
            <input type="text" value={car.model} onChange={(e) => handleCarChange({...car, model: e.target.value})} /> <br />
            <input type="number" value={car.year} onChange={(e) => handleCarChangeCar({...car, year: e.target.value})} /> <br />
        </div>
    )
}

export default FavoriteCar