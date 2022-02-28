import React, { Component } from "react";
import { NavLink, Route } from "react-router-dom";
import Home from "./Pages/Home"; //路由组件
import About from "./Pages/About";
import Header from "./Components/Header"; //一般组件
import "./app.css";

export default class App extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="row">
            <div className="col-xs-offset-2 col-xs-8">
              <Header />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-2 col-xs-offset-2">
              <div className="list-group">
                {/* <a className="list-group-item" href="./about.html">About</a>
                        <a className="list-group-item active" href="./home.html">Home</a> */}

                {/* 路由链接 */}
                <NavLink
                  activeClassName="changecolor"
                  className="list-group-item"
                  to="/about"
                >
                  About
                </NavLink>
                <NavLink
                  activeClassName="changecolor"
                  className="list-group-item"
                  to="/home"
                >
                  Home
                </NavLink>
              </div>
            </div>
            <div className="col-xs-6">
              <div className="panel">
                <div className="panel-body">
                  {/* 注册路由 */}
                  <Route path="/about" component={About} />
                  <Route path="/home" component={Home} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
