import React, { useState } from 'react';
import ShowMessage from './ShowMessage';

const Counter = () => {

    const initialDate = 0;
    const [counter, setCounter] = useState(initialDate);
    const [message, setMessage] = useState();


    const incrementHandler = () => {
        setCounter(counter + 1);
        setMessage("Increment Ops is done!");
    };

    const decrementHandler = () => {
        setCounter(counter - 1);
        setMessage("Decrement Ops is done!");
    };

    return (
        <div className= "container">
            <ShowMessage message = {message}/>
            <h3>{counter}</h3>
            <button className = "btn btn-primary" onClick = {incrementHandler}>Increment the number</button>
            <button className = "btn btn-danger" onClick = {decrementHandler}>Decrement the number</button>
            <button className = "btn btn-dark" onClick = {() => {setCounter(0); setMessage();}}>Reset</button>
        </div>
    );
};

export default Counter;