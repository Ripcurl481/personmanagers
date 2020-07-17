import React from 'react';
import About from '../components/Router/About';
import Contact from '../components/Router/Contact';
import Login from '../components/Router/Login';
import Nav from '../components/Router/Nav'
import classes from'./App.module.css';
import Persons from '../components/Person/Persons';
import {BrowserRouter as Router ,Switch , Route} from 'react-router-dom';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends React.Component {
  constructor(props) {
    super(props)
    console.log('[App Constructor]rendered')
  }
  state = {
    persons:[
      {id:1,name: 'Sandesh' ,age:89},
      {id:2,name:"vinay" ,age:50},
      {id:3,name:"Ganesh" ,age:72}
    ],
    MyHobbies:'I love to play Guitar',
    ShowPerson:false,
  }
  TogglePersonHandler = () => {
    this.setState({ShowPerson: !this.state.ShowPerson})
  }
  NamedPersonHandler = (index) => {
     const BogglePerson = [...this.state.persons]
     BogglePerson.splice(index , 1);
     this.setState({persons: BogglePerson})
  }
  SwitchNameChange = (event,id) => {
    const PersonIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {...this.state.persons[PersonIndex]};
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[PersonIndex] = person;
    this.setState({persons: persons});
  
  }
  render(){
    let person = null;
    if(this.state.ShowPerson){
      person = (
        <div>
          <Persons 
          persons = {this.state.persons}
          Handler = {this.NamedPersonHandler}
          Switch = {this.SwitchNameChange}
          />
        </div>)}
   return (
      <div className={classes.App}>
        <Router>
        <div>
          <Nav />
          <Switch>
          <Route path="/about" exact component = {About} />
          <Route path="/Contact" exact component = {Contact} />
          <Route path="/Login" exact component = {Login} />
          </Switch>
        </div>
        </Router>

        <Cockpit 
        persons = {this.state.persons}
        Toggle = {this.TogglePersonHandler}
        />
        {person}
      </div>
    );
  }
 }

export default App;
