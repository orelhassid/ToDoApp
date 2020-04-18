import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homePage";
import layout from "./layout/layout.module.scss";
import ListsContextProvider from "./contexts/listsContext";

function App() {
  return (
    <div className="App">
      <div className={layout["layout-container"]}>
        <ListsContextProvider>
          <Switch>
            <Route path="/" component={HomePage} />
          </Switch>
        </ListsContextProvider>
      </div>
    </div>
  );
}

export default App;
