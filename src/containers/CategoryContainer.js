import React, { Component } from 'react'
import Shops from '../components/Shops'
import { connect } from 'react-redux'

class CategoryContainer extends Component {
    render() {   
        console.log("sc props:", this.props.category, this.props.tags) 
        // the props are not getting passed  
        // {this.props.match.params.id}
        // const shops = this.props.shops 
        // const category = shops.length > 0 ? shops[0].category.name : ""
        return (
            <div>
                Results found for {this.props.category} 
                {/* {category} */}
                {/* <Shops shops={this.props.shops} /> */}
            </div>
        )
    }
}

const mapStateToProps = state => { 
    return {
        shops: state.shops
    }
}

export default connect(mapStateToProps)(CategoryContainer)