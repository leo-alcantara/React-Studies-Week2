import React, { useEffect, useState } from 'react';

const Car = () => {
    const initialData = {brand: "", model: "", year: ""};
    const [car, setCar] = useState(initialData);

    useEffect(() => {
        setCar({brand: "Porsche", model: "911", year: "2021"});
    }, []);
    return (
        <div>
           <b>Brand: {car.brand}</b>
           <br/>
           <b>Model: {car.model}</b> 
           <br/>
           <b>Year: {car.year}</b> 
        </div>
    );
};

export default Car;