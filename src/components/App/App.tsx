import React, { useState } from "react";
import "./App.css";
import { TopBar } from "./TopBar";
import { FrontPage } from "../FrontPage/FrontPage";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { CategoryPage } from "../CategoryPage/CategoryPage";

const App: React.FC = () => {
  return (
    <Router>
      <TopBar />
      <Route exact path="/" component={FrontPage} />
      <Route exact path="/category/:category" component={CategoryPage} />
    </Router>
  );
};

export default App;
