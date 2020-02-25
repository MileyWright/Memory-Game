import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Navbar from './Navbar';

class MainPage extends Component {

    render(){
        return(
            <>
            <Navbar title={"Soild Memory"}/>
            <Link to='/90scartoon'>
                <button>90s Cartoons</button>
            </Link>
            <Link to='/anime'>
                <button>Anime</button>
            </Link>
            <Link to='/avengers'>
                <button>Avengers</button>
            </Link>
            <Link to='/familyguy'>
                <button>Family Guy</button>
            </Link>
            <Link to='/ricknmorty'>
                <button>Rick n Morty</button>
            </Link>
            </>
        )
    }
}

export default MainPage;