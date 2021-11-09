import React, {  useState } from 'react';

const Person = () => {
    const [firstName,setFirstName] = useState('');

    const inputHandler = (e) => {
        console.log(e.target.value);
        setFirstName(e.target.value);
    };

    const clickHandler = () => {
        console.log("FIRSTNAME: ",firstName);
        // call API and send Data to the backend
    };

    return (
        <div className="container">
            <form>
                <div className="row">
                    <div className="col-6">
                        <input type="text" id="firstName" name="firstName" 
                        value={firstName} onChange={inputHandler} placeholder="Enter First Name"/>
                    </div>
                    <div className="col-2">
                        <button type="button" className="btn btn-success" onClick={clickHandler} >Click</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Person;