import "./App.css";
import React from "react";
import NavBar from "./components/NavBar";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Login } from "./pages/Login";
import { Contact } from "./pages/Contact";
import { TestLogin } from "./Login/TestLogin";
import CallApi from "./components/CallApi";
import axios from "axios";


function App() {
  const getd=()=>{
    axios.get("http://localhost:8080/menu").then(
        (response)=>{
            console.log(response);
        }
    );
  }
  const data=[
    {"id":1, "cost": 123123},
    {"id":100, "price":1231}

  ]
  const postData=()=>{
    axios.post("http://localhost:8080/menu", data)
  }
  return (
    <>
      <Router>
        <NavBar />
        <div className="pages">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/login" component={Login} />
            <Route path="/contact" component={Contact} />
          </Switch>
          {/*<div>
            <TestLogin />
            <Switch>
              <Route exact path="/home" component={Home} />
            </Switch>
          </div>*/}
        </div>
        <div>
            hi <button onClick={getd}>getget</button>
            <button onClick={postData}>post</button>
        </div>
        <hr></hr>
        <div>
          <CallApi />
        </div>
      </Router>
    </>
  );
}

export default App;