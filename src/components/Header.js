import React, { Component } from "react";
import Todo from './Todo'
import { Route, Switch, Link, NavLink } from "react-router-dom";
import headerStyles from "../Styles/header.module.css";

const Header = (props) => {
  return (
    <div className={headerStyles.headerContainer}>
      <h2>{props.title || 'My APP'}</h2>
      <ul>
        <li>
          <NavLink activeClassName="am-active" to="/" exact>
            TodoApp
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="am-active" to="/likesApp">
            LikesApp
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="am-active" to="/localStorage">
            LocalStorage
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
export default Header;
