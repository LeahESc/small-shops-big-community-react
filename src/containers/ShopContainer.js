import React, { Component } from 'react'
import { connect } from 'react-redux'

class ShopContainer extends Component {
    render() {
        // this.props.match.url = "/categories/1/shops/1"
        const urlArray = this.props.match.url.split
        return (
            <div>
                
            </div>
        )
    }
}

const mapStateToProps = state => { 
    return { 

    }
}
export default connect(mapStateToProps)(ShopContainer)