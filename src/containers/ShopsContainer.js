import React, { Component } from 'react'
import Shops from '../components/Shops'
import { connect } from 'react-redux'

class ShopsContainer extends Component {
    render() {   
        console.log("sc props:", this.props.shops)  
        const shops = this.props.shops 
        const category = shops.length > 0 ? shops[0].category.name : ""
        return (
            <div>
                {category}
                <Shops shops={this.props.shops} />
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