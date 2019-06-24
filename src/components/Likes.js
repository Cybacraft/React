
import React from 'react';

class Likes extends React.Component{
 state = {
  likes: 0,
   grace: true}
 
 increaseLikes = () => {
 this.setState((prevState)=>{
   return {
    likes: prevState.likes + 1,
    grace: prevState.grace = false
   }
 })
}

decreaseLikes = () => { this.setState((prevState)=>{
 return {
  likes: prevState.likes - 1
 }
})
}

 render(){
  return(
   <div>
    <h1>Welcome to my likes app</h1>
    <h3>likes: {this.state.likes}</h3>
    <button onClick ={this.increaseLikes}>like</button>
    <button onClick ={this.decreaseLikes}>unlike</button>
    <button>reset</button>
   </div>
  )
 }
}

export default Likes;