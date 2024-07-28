import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import GraphComponent from "./components/home/GraphComponent";

function App() {
  const getMode = () => {
    return JSON.parse(localStorage.getItem("mode"));
  };

  const [dark, setMode] = useState(getMode());

  useEffect(() => {
    localStorage.setItem("mode", JSON.stringify(dark));
  }, [dark]);

  return (
    <Router>
      <div className={dark ? "app" : "light"}>
        <Header dark={dark} setMode={setMode} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/graph" component={GraphComponent} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
