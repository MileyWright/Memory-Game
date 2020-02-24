import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class MainPage extends Component {
    render(){
        return(
            <>
            <Link path to='/90scartoon'>
                <button>90s Cartoons</button>
            </Link>
            <Link path to='/anime'>
                <button>Anime</button>
            </Link>
            <Link path to='/avengers'>
                <button>Advengers</button>
            </Link>
            <Link path to='/familyguy'>
                <button>Family Guy</button>
            </Link>
            <Link path to='/ricknmorty'>
                <button>Rick n Morty</button>
            </Link>
            </>
        )
    }
}

export default MainPage;