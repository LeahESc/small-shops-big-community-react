import React, { Component } from 'react'
import TagCheckbox from './TagCheckbox'
import ShopsContainer from '../containers/ShopsContainer'


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
                    <button type="submit">Search</button> 
                    {this.createTagCheckboxes()}
                </form>
                < ShopsContainer />
            </div>
        )
    }
}

export default HomeSearch;
