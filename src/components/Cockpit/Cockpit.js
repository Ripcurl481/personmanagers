import React from 'react';
import classes from './Cockpit.module.css';

const Cockpit = (props) => {
    const assignedclasses = [];
    if(props.persons.length <= 2){
      assignedclasses.push(classes.red)
    }
    if(props.persons.length <= 1){
      assignedclasses.push(classes.bold)
    }
    return (
        <div className = {classes.App}>
        <h1>I am React App</h1>
        <p className = {assignedclasses.join(' ')}>Hello i am react app</p>
        <button className={classes.Button} onClick = {props.Toggle}
        >TogglePerson</button>
       </div>
    )
}
export default Cockpit;