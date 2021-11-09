import React from 'react';

const ShowMessage = (props) => {
    return (
        <div>
           {props.message && <div className= "alert alert-info">{props.message}</div>} 
        </div>
    );
};

export default ShowMessage;