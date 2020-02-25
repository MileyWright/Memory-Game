import React from 'react';

function Navbar(props) {
        return(
            <header className='container-fluid fixed-top'>
                <div className='row'>
                <h1 className="col-sm-8">{props.title} </h1>
                <nav className="col-sm-4">
                    <p>Score: <span>{props.currentScore}</span></p>
                    <p>Top Score: <span>{props.highScore}</span> </p>
                </nav>
                </div>
            </header>
        )
}

export default Navbar;