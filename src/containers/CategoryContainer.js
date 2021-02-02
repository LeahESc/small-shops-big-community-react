import React, { Component } from 'react'
import Shops from '../components/Shops'
import { connect } from 'react-redux'

class CategoryContainer extends Component {
    render() {   
        console.log("category container props:", this.props, this.props.tags) 
        const categoryId = parseInt(this.props.match.params.id)
        const category = this.props.categories.find(c => c.id === categoryId)
        let queryTerms = this.props.location.search.substring(3).split('&')
        const tags = queryTerms.map(term => term.replace(/_/g, " "))
        const shops = category.shops.filter(s => {
            if (s.tags.some(tag => tag.name === tags[0])) {
                return s
            }}) 
        return (
            <div>
                Results found for {this.props.category} 
                {shops}
                {/* <Shops shops={this.props.shops} /> */}
            </div>
        )
    }
}

const mapStateToProps = state => { 
    return {
        categories: state.categories
    }
}

export default connect(mapStateToProps)(CategoryContainer)