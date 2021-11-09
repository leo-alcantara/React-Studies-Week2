import React, { useState } from 'react';

const NewPerson = () => {
    const initialData = {firstName: '', lastName: ''};
    const [person, setPerson] = useState(initialData);

    const inputHandlerFN = (e) => {
        const val = e.target.value;
        //using spread operator we can clone the object
        let _person = {... person, firstName: val};
        setPerson(_person);
    };

    const inputHandlerLN = (e) => {
        const val = e.target.value;
        //using spread operator we can clone the object
        let _person = {... person, lastName: val};
        setPerson(_person);
    };

    const clickHandler = () => {
        console.log("Person: " + person);
    };

    return (
        <div className = "container">
            <form>
                <div className = "row">
                    <div className= "col-4">
                        <input type= "text" id= "firstName" name= "firstName"
                        value= {person.firstName} onChange={inputHandlerFN} placeholder= "Enter your first name"></input>
                    </div>
                    <div className= "col-4">
                        <input type= "text" id= "lastName" name= "lastName"
                        value= {person.lastName} onChange={inputHandlerLN} placeholder= "Enter your last name"></input>
                    </div>
                    <div className= "col-2">
                        <button type= "button" className= "btn btn-primary" onClick= {clickHandler}>Submit</button>
                    </div>
                </div>
            </form>
            
        </div>
    );
};

export default NewPerson;