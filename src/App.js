import React from "react";
import ThemeContextProvider from "./contexts/themeContext";
import { Switch, Route, Redirect } from "react-router-dom";
import "./css/layout.css";
import HomePage from "./pages/homePage";
import ListPage from "./pages/listPage";
import TodoContextProvider from "./contexts/todoContext";
import NotFoundPage from "./pages/notFoundPage";
import UserPage from "./pages/userPage";

function App() {
  return (
    <ThemeContextProvider>
      <TodoContextProvider>
        <div className="App Screen">
          <Switch>
            <Route path="/notfound" component={NotFoundPage} />

            <Route path="/lists/:id" component={ListPage} />
            <Route
              exact
              path="/"
              render={(props) => <HomePage {...props} title="Hey" />}
            />
            <Route path="/me" component={UserPage} />
            <Redirect to="/notfound" />
          </Switch>
        </div>
      </TodoContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
