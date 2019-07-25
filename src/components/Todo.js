import React, { Component } from "react";
import Header from "./Header";
import TodoItems from "./TodoItems";
import todoStyles from '../Styles/todo.module.css'

class Todo extends Component {
  state = {
    todoItems: [],
    newTodo: ""
  };

  handleChange = e => {
    this.setState({ newTodo: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const duplicateItem = this.state.todoItems.filter(todoItem => {
      if (isNaN(todoItem)) {
        return todoItem.toUpperCase() === this.state.newTodo.toUpperCase();
      } else {
        return todoItem === this.state.newTodo;
      }
    });

    if (this.state.newTodo && duplicateItem.length == 0) {
      this.setState(prevState => {
        return {
          todoItems: prevState.todoItems.concat(this.state.newTodo),
          newTodo: (this.state.newTodo = "")
        };
      });
    }
  };

  componentDidUpdate(prevPros, prevState) {
    if (prevState.todoItems.length !== this.state.todoItems.length) {
      const jsonState = JSON.stringify(this.state.todoItems);
      localStorage.setItem("todoItems", jsonState);
    }
  }

  componentDidMount() {
    const itemsFromLocalStorage = localStorage.getItem("todoItems");
    const todoItems = JSON.parse(itemsFromLocalStorage);
    if (todoItems) {
      this.setState(() => ({
        todoItems
      }));
    }
  }

  handleRemoveOneItem = itemToBeRemoved => {
    this.setState(prevState => ({
      todoItems: prevState.todoItems.filter(
        todoItem => todoItem !== itemToBeRemoved
      )
    }));
  };

  RemoveAll = () => {
    this.setState(prevState => {
      return {
        todoItems: []
      };
    });
  };

  render() {
    console.log(localStorage.getItem("todoItems"));
    // destructuring props
    const { todoItems, newTodo } = this.state;
    return (
      <div>
        <Header title="TODO APP" />
        <h1 className={todoStyles.title}> GET GOING WITH TODO APP </h1>

        <div className={todoStyles.wrapper}>
        <div className={todoStyles.forms} >
        <form onSubmit={this.handleSubmit}>
          <br />
          <input
            type="text"
            value={this.state.newTodo}
            onChange={this.handleChange}
            placeholder ='Text'/>
          <br />
          <button>submit</button>
        </form>
        </div> 

        <div className={todoStyles.cover}>
          <button className={todoStyles.removeAllButton}
          style={{ display: todoItems.length == 0 ? "none" : "block" }}
          onClick={this.RemoveAll} >Clear</button>
        {todoItems.map(items => (
          <TodoItems
            key={items}
            handleRemoveOneItem={this.handleRemoveOneItem}
            individualItem={items}
          />
        ))}
          </div> 
      </div>
      </div>
    );
  }
}
export default Todo;
