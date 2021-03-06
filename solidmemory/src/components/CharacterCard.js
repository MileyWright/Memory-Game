import React from "react";

function CharacterCard(props) {
    return (
        <div className={"card " + (props.clicked ? "animate" : "")} onClick={() => props.handleClick( props.id)} >  
            <div className="imgContainer">
                <img  alt={props.name} src={props.image} />
            </div>
            <div className="imgContent">
                <ul>
                    <li>
                        {props.name}
                    </li>
                    <li>
                        <i> {props.show}</i>
                    </li>
                </ul>
            </div>
        </div >
    )
}

export default CharacterCard;