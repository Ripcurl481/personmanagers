import React, { Component } from 'react';
import classes from './Nav.module.css';
import {Link} from 'react-router-dom'

export default class Nav extends Component {
    render() {
        return (
            <div className = {classes.nav}>
                <ul className = {classes.navigation}>
                    <Link to = '/About'><li>Aboutus</li></Link>
                    <Link to = '/Contact'><li>Contact</li></Link>
                    <Link to = '/Login'><li>Login</li></Link>
                </ul>
            </div>
        )
    }
}
