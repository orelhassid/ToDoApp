import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./components/pages/homePage";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Switch>
          <Route path="/" component={HomePage} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
