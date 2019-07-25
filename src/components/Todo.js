import React, { Component } from "react";
import Header from "./Header";
import TodoItems from "./TodoItems";

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
        todoItem => todoItem != itemToBeRemoved
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
        <Header title="MY TODO TITLE" />
        <h1>Welcome to my todo App </h1>
        {todoItems.map(items => (
          <TodoItems
            // key={item}
            handleRemoveOneItem={this.handleRemoveOneItem}
            individualItem={items}
          />
        ))}
        <form onSubmit={this.handleSubmit}>
          <label>TodoItem</label>
          <br />
          <input
            type="text"
            value={this.state.newTodo}
            onChange={this.handleChange}
          />
          <br />
          <button>submit</button>
        </form>
        <button
          style={{ display: todoItems.length == 0 ? "none" : "block" }}
          onClick={this.RemoveAll} >Remove All</button>
      </div>
    );
  }
}
export default Todo;
