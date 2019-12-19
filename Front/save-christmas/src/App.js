import React from 'react';
import SnowPage1 from'./components/SnowPage1';
import SnowPage2 from'./components/SnowPage2';
import './App.css';
import Main from "./components/main/Main";
import { Switch, Route } from "react-router-dom";
import Scene from "./components/scene/Scene";
import SceneEnd from "./components/scene/SceneEnd";
import Choice from "./components/choice/Choice"

function App() {
  return (
    
    <div className = "App">
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/scene" component={Scene} />
        <Route path="/sceneEnd" component={SceneEnd} />
        <Route path="/choice" component={Choice} />
       <Route path="/SnowPage1" component={SnowPage1} />
       <Route path="/SnowPage2" component={SnowPage2} />
     </Switch>

    </div>
  );
}

export default App;
