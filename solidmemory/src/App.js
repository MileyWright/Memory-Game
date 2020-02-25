import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import MainPage from './components/MainPage';
import {Route} from 'react-router-dom';
import Cartoon from './components/Categories/Cartoon';
import Anime from './components/Categories/Anime';
import Avengers from './components/Categories/Avengers';
import FamilyGuy from './components/Categories/FamilyGuy';
import RicknMorty from './components/Categories/RicknMorty';

class App extends Component {
  

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <Route exact path='/' component={MainPage}/>
          <Route exact path='/90scartoon' component={Cartoon}/>
          <Route exact path='/anime' component={Anime}/>
          <Route exact path='/avengers' component={Avengers}/>
          <Route exact path='/familyguy' component={FamilyGuy}/>
          <Route exact path='/ricknmorty' component={RicknMorty} />
        </header>

      </div>
    );
  }
}

export default App;
