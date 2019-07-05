import React, {Component} from 'react';
import Header from './Header'
import TodoItems from './TodoItems'

class Todo extends Component {
    state ={
        todoItems: [ ],
        newTodo:''
    }

    handleChange =(e)=>{
    this.setState ({newTodo: e.target.value})
    }

    handleSubmit=(e)=>{
     e.preventDefault()
     this.setState((prevState)=>{
        return {
            todoItems: prevState.todoItems.concat(this.state.newTodo),
        newTodo: this.state.newTodo =''}})
    }

    componentDidUpdate(prevPros, prevState){
        if(prevState.todoItems.length !== this.state.todoItems.length){
        const jsonState = JSON.stringify(this.state.todoItems)
        localStorage.setItem('todoItems',jsonState)
        }
    }

    componentDidMount(){
        const itemsFromLocalStorage =localStorage.getItem('todoItems')
        const todoItems =JSON.parse(itemsFromLocalStorage)
        if(todoItems){
            this.setState(() => ({
                todoItems
            }))
        }
            
        }


        render(){
        return (
            <div>
            <Header  title ='MY TODO TITLE'/>
            <h1>Welcome to my todo App </h1>
            {this.state.todoItems.map(items =>(<TodoItems individualItem ={items}/>))}
            <form onSubmit = {this.handleSubmit}>
            <label>TodoItem</label><br></br>
            <input type ='text'
            value={ this.state.newItems}
            onChange ={this.handleChange}>
            </input><br></br>
            <button>submit</button>
            </form>
            </div>

        )
    }
}
export default Todo;




