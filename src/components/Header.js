import React, {Component} from 'react'
import { Route, Switch, Link, NavLink} from "react-router-dom";

const Header = (props) =>{
    return (
        <div>
        <h2>{props.title}</h2>
        <NavLink activeClassName="am-active" to="/" exact>Todo App</NavLink>
        <NavLink activeClassName="am-active" to="/likesApp">LikesApp</NavLink>
        <NavLink activeClassName="am-active" to="/localStorage">Local Storage</NavLink>
      </div> 
  )
};
export default Header;