import React, {Component} from 'react';

function Cartoon(props) {
    console.log(props)
   
        return(
            <div>
            <h2>{props.cartoon}</h2>
            Cartoon here
            </div>
        )
    
}

export default Cartoon;