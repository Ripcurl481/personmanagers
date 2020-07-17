import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            <div>
                <form>
                    Name:<input type="text"/>
                    <br></br>
                    <br></br>
                    Email:<input type="email"/>
                    <br></br>
                    <br></br>
                    Mobile:<input type="text"/>
                    <br></br>
                    <br></br>
                    Address:<input type="Address"/>
                </form>
                <h2>Please fill of contact form</h2>
            </div>
        )
    }
}
