import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <ul className="menu cf">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Categories</a>
            <ul className="submenu">
              <li>
                <Link to="/">General</Link>
              </li>
              <li>
                <Link to="/science">Science</Link>
              </li>
              <li>
                <Link to="/Sports">Sports</Link>
              </li>
              <li>
                <Link to="/technology">Technology</Link>
              </li>
            </ul>
          </li>
          <li>
            <a href="/">Blog</a>
          </li>
          <li>
            <a href="/">About us</a>
          </li>
          <li>
            <a href="/">Contact us</a>
          </li>
        </ul>
      </div>
    );
  }
}
