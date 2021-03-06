import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Books from "./pages/books/Books";
import Users from "./pages/users/Users";
import Home from "./pages/home/Home";

function App(props) {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/books">
          <Books></Books>
        </Route>
        <Route exact path="/users">
          <Users></Users>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
