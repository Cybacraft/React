
import React from 'react';
import Header from './Header';

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

resetsLikes = () => { this. setState((prevState)=>{
  return{
    likes: prevState.likes = 0
    
  }
})
}

 render(){
  return(
   <div>
     <Header Title = 'My title header'/>
    <h1>Welcome to my likes app</h1>
    <h3>likes: {this.state.likes}</h3>
    <button onClick ={this.increaseLikes}>like</button>
    <button onClick ={this.decreaseLikes}>unlike</button>
    <button onClick ={this.resetsLikes}>reset</button>
   </div>
  )
 }
}

export default Likes;