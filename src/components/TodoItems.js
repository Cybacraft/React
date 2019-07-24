import React, {Component} from 'react'

const TodoItems = (props) =>{
   // destructuring props
   const { individualItem, handleRemoveOneItem} = props
    return (
        <div>
            {individualItem}
            <button onClick={ e => {
            handleRemoveOneItem(individualItem)
        }}>Remove</button> 
        </div>
    )
}
export default TodoItems;