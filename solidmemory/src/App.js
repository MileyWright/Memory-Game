import React from 'react';
import './App.css';
import MainPage from './components/MainPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <MainPage/>
      </header>
    </div>
  );
}

export default App;
