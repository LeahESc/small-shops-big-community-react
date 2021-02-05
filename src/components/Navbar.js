import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'

// export default class Navbar extends Component {
const Navbar = () => { 

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

export default Navbar
