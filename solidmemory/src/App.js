import React, { Component } from 'react';
import './App.css';
import MainPage from './components/MainPage';
import {Route} from 'react-router-dom';
import Cartoon from './components/Categories/Cartoon';
import Anime from './components/Categories/Anime';
import Avengers from './components/Categories/Avengers';
import FamilyGuy from './components/Categories/FamilyGuy';
import RicknMorty from './components/Categories/RicknMorty';

class App extends Component {
  constructor(){
    super();
    this.state = {
      cartoon: []
    }
  }

  conmponentDidMount() {
    fetch('https://solidmemory.herokuapp.com/90sCartoon')
    .then(res => res.json())
    .then(res => {
      this.setState({cartoon: res})
      console.log(res)
    })
    .catch(err => {
      console.log("error:",err)
    })


  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <Route exact path='/' component={MainPage}/>
    <Route exact path='/90scartoon' render={props => <Cartoon {...props} cartoon={this.state.cartoon} /> }/>
          <Route exact path='/anime' component={Anime}/>
          <Route exact path='/avengers' component={Avengers}/>
          <Route exact path='/familyguy' component={FamilyGuy}/>
          <Route exact path='/ricknmorty' component={RicknMorty}/>

        </header>

      </div>
    );
  }
}

export default App;
