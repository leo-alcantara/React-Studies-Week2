import React, { useState } from 'react';

const NewPerson = () => {
    const initialData =  {firstName: '', lastName: ''};
    const [person,setPerson] = useState(initialData);

    const inputHandlerFN = (e) => {
        const val = e.target.value;
        // using spread operator we can make a clone of object 
        let _person = {... person, firstName: val};

        setPerson(_person);
    };

    const inputHandlerLN = (e) => {
        const val = e.target.value;
        let _person = {... person, lastName: val};
        
        setPerson(_person);
    };

    const clickHandler = () => {
        console.log("PERSON:",person);
    };

    return (
        <div className="container">
            <form>
                <div className="row">
                    <div className="col-4">
                        <input type="text" id="firstName" name="firstName" value={person.firstName} onChange={inputHandlerFN} placeholder="Enter First Name"/>
                    </div>
                    <div className="col-4">
                        <input type="text" id="lastName" name="lastName" value={person.lastName} onChange={inputHandlerLN} placeholder="Enter Last Name"/>
                    </div>
                    <div className="col-2">
                        <button type="button" className="btn btn-success" onClick={clickHandler}>Click</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default NewPerson;