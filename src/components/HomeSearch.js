import React, { Component } from 'react'
import '../App.css'
import TagCheckbox from './TagCheckbox'
import { Redirect } from 'react-router-dom';


class HomeSearch extends Component {
    state = {
        search: '',
        tags: [
            {id: 1, value:"BIPOC-OWNED", checked: false},
            {id: 2, value:"WOMEN/WOMXN-OWNED", checked: false},
            {id: 3, value:"LGBTQ+-OWNED", checked: false},
            {id: 4, value:"COMMITMENT TO SOCIAL IMPACT", checked: false}
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

    handleSubmit = (e) => { 
        e.preventDefault()
        const matchedCategory = this.props.categories.find(category => category.name.substring(0,3) === this.state.search.substring(0,3))
        this.setState({
            ...this.state, 
            category: matchedCategory,
            redirect: true
        })   
    } 
    
    render() {
        if (!this.state.redirect) {
        return (
            <div>
                <header className="header">
                {/* <img src={logo} className="App-logo" alt="logo" /> */}
                    <h1>SMALL SHOPS</h1>
                    <h2>BIG COMMUNITY!</h2>
                    <h4>Start your search by typing in the kind of business you'd like to patronize and select the parameters of businesses you'd like to support</h4>
                
                    <form onSubmit={this.handleSubmit}> 
                        <input type ="text" name="category" onChange={this.handleChange} value={this.state.search} placeholder="try 'plant shops'"/>
                            <button type="submit">Search</button>
                        {this.createTagCheckboxes()}
                    </form>
                </header>
            </div>
        )} else { 
            const selectedTags = this.state.tags.filter(tag => tag.checked === true)
            const tagNames = selectedTags.map(tag => tag.value.split(' ').join('_'))
            const queryString="?q="+ tagNames.join('&')
            return (
                <div>
                <Redirect to={ `/categories/${this.state.category.id}/shops/${queryString}` }   />
                </div>      
            )
        }
    }
}

export default HomeSearch;
