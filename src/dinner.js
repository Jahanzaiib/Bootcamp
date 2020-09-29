import React from 'react';

function Dinner (props){
    return(
        <div>
            <h1>Today we offer you 50% discount on {props.dishname}</h1>
            <h1> For Food lover {props.sweet}</h1>
        </div>
    )
}
export default Dinner;

