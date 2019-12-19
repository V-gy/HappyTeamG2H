import React from 'react';
import './App.css';
import Main from "./components/main/Main";
import { Switch, Route } from "react-router-dom";
import Scene from "./components/scene/Scene";

function App() {
  return (
    <div className="App">
     <Switch>
       <Route exact path="/" component={Main}/>
       <Route path="/scene" component={Scene}/>
     </Switch>
    </div>
  );
}

export default App;
