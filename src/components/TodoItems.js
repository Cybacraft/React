import React, {Component} from 'react'
import todoItemsStyle from '../Styles/todoItems.module.css'

const TodoItems = props =>{
   // destructuring props
   const { individualItem, handleRemoveOneItem} = props
    return (
        <div className={todoItemsStyle.todoItems}>
            {individualItem}
            <button className={todoItemsStyle.removeButton} onClick={ e => {
            handleRemoveOneItem(individualItem)
        }}>Remove</button> 
        </div>
    )
}
export default TodoItems;