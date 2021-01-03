import React from "react";
import HomePage from "./pages/homePage.component";
import "./App.css";
import { Route, Switch } from "react-router-dom";


const Hats = () => {
  return (
      <div>
          <h1>Hats page</h1>
      </div>
  )
}

function App() {
  return (
    <Switch>
    <Route path="/" exact component={HomePage} />
    <Route path="/hats" exact component={Hats} />
    </Switch>
    ) 
  }

export default App;
