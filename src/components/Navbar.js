import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'

export default class Navbar extends Component {
    render() {
        return (
        < div >
            <nav className="navbar navbar-light" style={{background: '#ffecfc'}}>
                
                <Link to='/'>
                    <Icon name='home' size='big' color='yellow'/>
                </Link>
        
            </nav>
        </div>
        )
    }
}
