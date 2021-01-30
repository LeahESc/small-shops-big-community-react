import React, { Component } from 'react'
import TagCheckbox from './TagCheckbox'
import CategoryContainer from '../containers/CategoryContainer'
import { connect } from 'react-redux'
import fetchShops from '../actions/categoryActions'

class HomeSearch extends Component {
    state = {
        category: '',
        tags: [
            {id: 1, value:"BIPOC-OWNED", checked: false},
            {id: 2, value:"WOMEN/WOMXN-OWNED", checked: false},
            {id: 3, value:"LGBTQ+-OWNED", checked: false},
            {id: 4, value:"COMMITMENT TO SOCIAL IMPACT", checked: false}
        ]
    }

    handleChange = (e) => {
        this.setState({
            ...this.state,
            category: e.target.value
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

    selectedTags = () => { 
        this.state.tags.filter(tag => tag.checked === true)
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const initialTags = [
            {id: 1, value:"BIPOC-OWNED", checked: false},
            {id: 2, value:"WOMEN/WOMXN-OWNED", checked: false},
            {id: 3, value:"LGBTQ+-OWNED", checked: false},
            {id: 4, value:"COMMITMENT TO SOCIAL IMPACT", checked: false}
        ]
        this.props.fetchShops(this.state)
        this.setState({ 
            category: '',
            tags: initialTags,
        })   
    }  
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type ="text" name="category" onChange={this.handleChange} value={this.state.category} placeholder="try 'plant shops'"/>
                    <button type="submit" >Search</button> 
                    {this.createTagCheckboxes()}
                </form>
                <CategoryContainer shops={this.props.shops} selectedTags={this.selectedTags} />
            </div>
        )
    }
}

const mapStateToProps = state => { 
    return {
      shops: state.shops
    }
  }

export default connect(mapStateToProps,{ fetchShops })(HomeSearch)
