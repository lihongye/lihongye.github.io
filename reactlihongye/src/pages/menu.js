import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
export default class Menu extends Component{
  render(){
    return(
        <Router>
            <ul>
                <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/about">About</Link>
                </li>
                <li>
                <Link to="/topics">Topics</Link>
                </li>
            </ul>
        </Router>
      
    );
  }
}