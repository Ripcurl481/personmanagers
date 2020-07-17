import React from 'react';
import Person from './Person';

const persons = (props) => props.persons.map((person , id) => {
    return <Person 
    key = {person.id}
    click = {props.Handler}
    name={person.name} 
    age={person.age}
    change = {(event) => props.Switch(event , person.id)}
    />})

export default persons;