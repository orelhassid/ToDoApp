import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homePage";
import layout from "./layout/layout.module.scss";
function App() {
  return (
    <div className="App">
      <div className={layout["layout-container"]}>
        <Switch>
          <Route path="/" component={HomePage} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
