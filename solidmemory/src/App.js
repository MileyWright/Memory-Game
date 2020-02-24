import React from 'react';
import './App.css';
import MainPage from './components/MainPage';
import {Route} from 'react-router-dom';
import Cartoon from './components/Categories/Cartoon';
import 
function App() {

  

  

  return (
    <div className="App">
      <header className="App-header">
        <Route exact path='/' component={MainPage}/>
        <Route exact path='/90scartoon' component={Cartoon}/>
      </header>

    </div>
  );
}

export default App;
