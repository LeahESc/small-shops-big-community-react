import React, { Component } from 'react'
import '../App.css'
import TagCheckbox from './TagCheckbox'
import { connect } from 'react-redux'


class HomeSearch extends Component {
    state = {
        search: '',
        tags: [
            {id: 1, value:"BIPOC-OWNED", checked: false},
            {id: 2, value:"WOMEN/WOMXN-OWNED", checked: false},
            {id: 3, value:"LGBTQ+-OWNED", checked: false},
            {id: 4, value:"SOCIAL IMPACT COMMITMENT", checked: false}
        ],
        category: '',
        redirect: null
    }

    handleChange = (e) => {
        this.setState({
            ...this.state,
            search: e.target.value
        })    
    }

    createTagCheckboxes = () =>  this.state.tags.map(tag => <TagCheckbox key={tag.id} value={tag.value} checked={tag.checked} handleCheck={this.handleCheck} /> )
    
    handleCheck = (e) => {
        const name = e.target.name;
        this.setState({  
            ...this.state,
            tags: [
            ...this.state.tags.map(tag => {
                if (tag.value === name ) {
                    return {...tag, checked: !tag.checked}
                } else {
                    return tag
                }
            })]
        })
    };

    handleClick = (e) => {
        const matchedCategory = this.props.categories.find(category => category.name.substring(0,3) === this.state.search.substring(0,3))
        const selectedTags = this.state.tags.filter(tag => tag.checked === true)
        const tagNames = selectedTags.map(tag => tag.value.split(' ').join('_'))
        const queryString="?q="+ tagNames.join('&')
        this.props.history.push(`/categories/${matchedCategory.id}/shops/${queryString}`)
    }

    render() {
        return (
            <div className="homeSearch">
                <header>
                    <h1>SMALL SHOPS</h1>
                    <h2>BIG COMMUNITY!</h2>
                    <h4>Start your search by typing in the kind of business you'd like to patronize and select the parameters of businesses you'd like to support</h4>
                        <input type ="text" name="category" onChange={this.handleChange} value={this.state.search} placeholder="try 'plant shops'"/>
                        <button onClick={this.handleClick}>Search</button>
                        {this.createTagCheckboxes()}
                </header>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      categories: state.categoriesReducer.categories
    }
  }

export default connect(mapStateToProps)(HomeSearch);
