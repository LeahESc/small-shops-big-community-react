import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return (
        < div >
            <nav className="navbar navbar-light" style={{background: '#5d43f1'}}>
                <li>
                <Link to='/'>Home</Link>
                </li>
            </nav>
        </div>
        )
    }
}
