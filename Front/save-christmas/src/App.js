import React from 'react';
import './App.css';
import Main from "./components/main/Main";
import { Switch, Route } from "react-router-dom";
import './reset.css';
import Scene from "./components/scene/Scene";
import SnowPage1 from'./components/SnowPage1';
import SnowPage2 from'./components/SnowPage2';
import SnowPage3 from './components/SnowPage3';



function App() {
  return (
    <div className="App">
      <Switch>
       <Route exact path="/" component={Main}/>
       <Route path="/scene" component={Scene}/>
      <Route path="/SnowPage1" component={SnowPage1}/>
      <Route path="/SnowPage2" component={SnowPage2}/>
      <Route path="/SnowPage3" component={SnowPage3}/>
      
      </Switch>
    </div>
  );
}

export default App;
