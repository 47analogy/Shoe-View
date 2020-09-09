import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import DisplayShoeList from './components/DisplayShoeList';
//import DisplayShoe from './components/DisplayShoe';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Header />
          <Route path="/" exact component={DisplayShoeList} />
          <Route path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
