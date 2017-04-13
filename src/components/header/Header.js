import React, { Component, PropTypes } from "react";
import { Link, IndexLink } from "react-router";
import "./header.css";

export default class Header extends Component {
  onLogoutClick = event => {
    event.preventDefault();
    this.props.handleLogout();
  };

  render() {
    const pathname = this.props.location.pathname;
    const isLoginPage = pathname.indexOf("login") > -1;
    const isAboutPage = pathname.indexOf("about") > -1;
    const isNextToGoPage = pathname.indexOf("nexttogo") > -1;

    return !isLoginPage &&
      <nav
        className="navbar navbar-toggleable-md navbar-inverse bg-inverse fixed-top"
      >
        <button
          type="button"
          className="navbar-toggler navbar-toggler-right"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <IndexLink to="/" className="navbar-brand">
          <div title="Home" className="brand" />
          Home
        </IndexLink>
        <div id="navbarCollapse" className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li
              title="Next To Go"
              className={isNextToGoPage ? "nav-item active" : "nav-item"}
            >
              <Link className="nav-link" to="/nexttogo">Next To Go</Link>
            </li>
            <li
              title="About"
              className={isAboutPage ? "nav-item active" : "nav-item"}
            >
              <Link className="nav-link" to="/about">About</Link>
            </li>
          </ul>
        </div>
      </nav>;
  }
}

Header.propTypes = {
  user: PropTypes.string,
  handleLogout: PropTypes.func.isRequired,
  location: React.PropTypes.object
};
