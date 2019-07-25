
import React from 'react';
import Header from './Header';
import likesStyles from '../Styles/likes.module.css'

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
   <div className={likesStyles.wrapper}>
     <Header title = "LIKES APP"/>
    <h1>Welcome to my likes app</h1>
    <h3>likes: {this.state.likes}</h3>
    <div className={likesStyles.buttonWrapper}>
    <button className={likesStyles.button}onClick ={this.increaseLikes}>like</button>
    <button className={likesStyles.button}onClick ={this.decreaseLikes}>unlike</button>
    <button className={likesStyles.button}onClick ={this.resetsLikes}>reset</button>
   </div>
   </div>
  )
 }
}

export default Likes;