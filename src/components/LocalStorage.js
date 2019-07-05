import React, {Component} from 'react'

class LocalStorage extends Component{
    render(){
        const person ={
        name: 'Dennis',
        age: '16'
        };
        //Connect to LocalStorage
        const personToJSON =JSON.stringify(person)

        //save to localStorage
        localStorage.setItem('newPerson', personToJSON)

        //Retrive from LocalStorage
        const getPerson = localStorage.getItem('newPerson')

        //Convert to real object.
        const personParse = JSON.parse(getPerson)
    return(
     <div>
         <h3>The Stringified Version is:</h3>
         <p>{getPerson}</p>
         <h4>The parse version is;</h4>
         <p>{personParse.name} and {personParse.age}</p>
     </div>
    )
     
    }
}

export default LocalStorage;
