import React from 'react';

function CharacterCard(props) {
    return(
        <div className={'card' + (props.clicked ? "animate" : "")} onClick={() => props.handleClick(props.id)}>
            <div className= "imgContainer">
                <img alt={props.name} src={props.image} />
            </div>
            <div className='imgContent'>
                <strong>Show: </strong>{props.name}
            </div>
        </div>
    )
}

export default CharacterCard;