import React from 'react'
import { BrowserRouter, Route, Switch, Link, NavLink} from "react-router-dom";
import LocalStorage from './LocalStorage';
import Todo from './Todo'
import Likes from './Likes'
import NotFoundPage from './NotFoundPage';
import Header from './Header'


const TodoRouter =()=>{
    return(
        <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Todo}/>
            <Route path="/LikesApp" component={Likes}/>
            <Route path= "/LocalStorage" component={LocalStorage}/>
            <Route component={NotFoundPage}/>
        </Switch>
        </BrowserRouter>
    )
}

export default TodoRouter;