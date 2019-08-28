import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import DisplayShoeList from './components/DisplayShoeList';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <DisplayShoeList />
      </div>
    );
  }
}

export default App;
