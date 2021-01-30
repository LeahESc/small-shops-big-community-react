import React, { Component } from 'react'
import Shops from '../components/Shops'
import { connect } from 'react-redux'

class ShopsContainer extends Component {
    render() {   
        console.log("sc props:", this.props)  
        const shops = this.props.shops 
        const category = shops.find(s => s.category.name)  
        return (
            <div>
                {/* {category} */}
            </div>
        )
    }
}

const mapStateToProps = state => { 
    return {
        shops: state.shops
    }
}

export default connect(mapStateToProps)(ShopsContainer)