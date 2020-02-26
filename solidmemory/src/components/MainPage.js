import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Navbar from './Navbar';

class MainPage extends Component {

    render(){
        return(
            <div className='mainpage'>
            <Navbar title={"Solid Memory"}/>
            <p className='p'>Choose a category and put your memory to the test. </p>
            <div className='categoryContainer'>
            <Link to='/90scartoon'>
                <button className='cartoon'></button>
            </Link>
            <Link to='/anime'>
                <button className='anime'></button>
            </Link>
            <Link to='/avengers'>
                <button className='avengers'></button>
            </Link>
            <Link to='/familyguy'>
                <button className='familyguy'></button>
            </Link>
            <Link to='/ricknmorty'>
                <button className='ricknmorty'></button>
            </Link>
            </div>
            </div>
        )
    }
}

export default MainPage;