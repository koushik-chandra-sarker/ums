import React from 'react';
import {Switch,  Route,} from "react-router-dom"
import './App.css';
import Login from "./components/Login";
import Main from "./components/Main";

function App() {
  return (
    <Switch>
        <Route exact path="/" component={Login}/>
        <Route path="/main" component={Main}/>
    </Switch>
  );
}

export default App;
