import React from 'react';

const NameListProps = (props) => {

    const getLastName = (name) => {
        let fullNameArray = name.split(" ");
        let lastName = fullNameArray[1];
        return <span>{lastName}</span>
    };
    
    return (
        <div>
            <ul>
                {props.myNames.map((name) => (<li>{getLastName(name)}</li>))}
            </ul>
            
        </div>
    );
};

export default NameListProps;