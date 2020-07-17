import React from 'react';
import classes from './Person.module.css'

const Person = (props) => {
    return (
        <div className = {classes.Person}>
            <p onClick = {props.click}>I am a {props.name} and my age is {props.age}</p>
            <input type="text" onChange = {props.change} value={props.name}></input>
            < p>{props.children}</p>
        </div>
    )
}
export default Person;