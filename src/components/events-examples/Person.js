import React, { useState } from 'react';

const Person = () => {

    const [firstName, setFirstName] = useState('');

    const inputHandler = (e) => {
        console.log(e.target.value);
        setFirstName(e.target.value);

    };

    const clickHandler = () => {
        console.log("First Name: " + firstName);
        //Call API and send Data to the Backend
    };


    return (
        <div className = "container">
            <form>
                <div className = "row">
                    <div className= "col-6">
                        <input type= "text" id= "firstName" name= "firstName"
                        value= {firstName} onChange={inputHandler} placeholder= "Enter your first name"></input>
                    </div>
                    <div className= "col-2">
                        <button type= "button" className= "btn btn-primary" onClick= {clickHandler}>Submit</button>
                    </div>
                </div>
            </form>
            
        </div>
    );
};

export default Person;