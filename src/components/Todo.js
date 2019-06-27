import React, {Component} from 'react';
import Header from './Header'
import TodoItems from './TodoItems'

class Todo extends Component {
    state ={
        todoItems: ['eat ' ,  'sleep ' ,  'train ' , 'fight ', 'rest','test'],
        newItems:''
    }

    handleChange =(e)=>{
    this.setState ({newItems: e.target.value})
    }

    handleSubmit=(e)=>{
     e.preventDefault()
     this.setState(
         {todoItems: this.state.todoItems.concat(this.state.newItems)})
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




