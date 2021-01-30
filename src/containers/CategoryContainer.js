import React, { Component } from 'react'
import Shops from '../components/Shops'
import { connect } from 'react-redux'

class CategoryContainer extends Component {
    render() {
        console.log("Category container props:" , this.props)
        const {category, selectedTags} = this.props
        return (
            <div>
                <h3>{category} with selected tags: {selectedTags} </h3>
                <Shops shops={this.props.shops}/>
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