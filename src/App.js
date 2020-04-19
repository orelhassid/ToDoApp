import React, { useContext } from "react";
import ThemeContextProvider, { ThemeContext } from "./contexts/themeContext";
import { Switch, Route } from "react-router-dom";
import "./css/layout.css";
import HomePage from "./pages/homePage";
import ListPage from "./pages/listPage";
import TodoContextProvider from "./contexts/todoContext";
function App() {
  return (
    <ThemeContextProvider>
      <TodoContextProvider>
        <div className="App Screen">
          <Switch>
            <Route path="/lists/:id" component={ListPage} />
            <Route
              path="/"
              render={(props) => <HomePage {...props} title="Hey" />}
            />
          </Switch>
        </div>
      </TodoContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
