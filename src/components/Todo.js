import React, {Component} from 'react';
import Header from './Header'
import TodoItems from './TodoItems'

class Todo extends Component {
    render(){
        const todoItems = ['eat ' ,  'sleep ' ,  'train ' , 'fight ', 'rest']
        return (
            <div>
            <Header  title ='MY TODO TITLE'/>
            <h1>Welcome to my todo App </h1>
            <ul>{
            todoItems.map(items =>(<TodoItems individualItem ={items}/>
            ))}
            </ul>
            </div>

        )
    }
}
export default Todo;




