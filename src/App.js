import React from "react";
import ThemeContextProvider from "./contexts/themeContext";
import { Switch, Route, Redirect } from "react-router-dom";
import TodoContextProvider from "./contexts/todoContext";
import HomePage from "./pages/homePage";
import ListPage from "./pages/listPage";
import NotFoundPage from "./pages/notFoundPage";
import UserPage from "./pages/userPage";
import LabPage from "./pages/labPage";
import "./css/layout.css";
import TasksPage from "./pages/tasksPage";

function App() {
  return (
    <React.StrictMode>
      <ThemeContextProvider>
        <TodoContextProvider>
          <div className="App Screen">
            <Switch>
              <Route path="/notfound" component={NotFoundPage} />
              <Route path="/tasks" component={TasksPage} />

              <Route path="/lab" component={LabPage} />
              <Route path="/lists/:id" component={ListPage} />
              <Route path="/" component={HomePage} exact />
              <Route path="/me" component={UserPage} />
              <Redirect to="/notfound" />
            </Switch>
          </div>
        </TodoContextProvider>
      </ThemeContextProvider>
    </React.StrictMode>
  );
}

export default App;
