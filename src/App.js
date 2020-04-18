import React, { useContext } from "react";
import ThemeContextProvider, { ThemeContext } from "./contexts/themeContext";
import { Switch, Route } from "react-router-dom";
import "./css/layout.css";
import HomePage from "./pages/homePage";
import ListPage from "./pages/listPage";
function App() {
  const name = useContext(ThemeContext);
  console.log(name);

  return (
    <ThemeContextProvider>
      <div className="App Screen">
        <Switch>
          <Route path="/lists/:id" component={ListPage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </div>
    </ThemeContextProvider>
  );
}

export default App;
