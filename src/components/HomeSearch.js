import React, { Component } from 'react'
import { fetchShops } from '../actions/categoryActions'
import TagCheckbox from './TagCheckbox'
import CategoryContainer from '../containers/CategoryContainer'


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

    handleSubmit = (e) => {
        const initialTags = [
            {id: 1, value:"BIPOC-OWNED", checked: false},
            {id: 2, value:"WOMEN/WOMXN-OWNED", checked: false},
            {id: 3, value:"LGBTQ+-OWNED", checked: false},
            {id: 4, value:"COMMITMENT TO SOCIAL IMPACT", checked: false}
        ]
        e.preventDefault()
        fetchShops(this.state.category)
        this.setState({ 
            category: '',
            tags: initialTags,
        })
        
    }

    handleCheck = (e) => {
        console.log("finding the tag", e.target, )
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

    createTagCheckboxes = () =>  this.state.tags.map(tag => <TagCheckbox key={tag.id} value={tag.value} checked={tag.checked} handleCheck={this.handleCheck} /> )
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type ="text" name="category" onChange={this.handleChange} value={this.state.category} placeholder="try 'plant shops'"/>
                    <button type="submit" >Search</button> 
                    {this.createTagCheckboxes()}
                </form>
            </div>
        )
    }
}

export default HomeSearch
