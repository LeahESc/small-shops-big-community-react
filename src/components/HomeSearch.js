import React, { Component } from 'react'
import '../App.css'
import TagCheckbox from './TagCheckbox'
import CategoryContainer from '../containers/CategoryContainer'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom'

class HomeSearch extends Component {
    state = {
        search: '',
        tags: [
            {id: 1, value:"BIPOC-OWNED", checked: false},
            {id: 2, value:"WOMEN/WOMXN-OWNED", checked: false},
            {id: 3, value:"LGBTQ+-OWNED", checked: false},
            {id: 4, value:"COMMITMENT TO SOCIAL IMPACT", checked: false}
        ],
        category: ''
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
        this.findCategory(this.state)
    }

    findCategory = () => { 
        const matchedCategory = this.props.categories.filter(category => category.substring(0,4) === this.state.search.substring(0,4))
        this.setState({
            ...this.state, 
            category: matchedCategory
        })
    }

    // handleSubmit = (e) => {
    //     e.preventDefault()
        // const initialTags = [
        //     {id: 1, value:"BIPOC-OWNED", checked: false},
        //     {id: 2, value:"WOMEN/WOMXN-OWNED", checked: false},
        //     {id: 3, value:"LGBTQ+-OWNED", checked: false},
        //     {id: 4, value:"COMMITMENT TO SOCIAL IMPACT", checked: false}
        // ]
        // this.props.fetchShops(this.state)
        // this.setState({ 
        //     category: '',
        //     tags: initialTags,
        // })   
    // }  
    
    render() {
        return (
            <div>
                <header className="header">
                {/* <img src={logo} className="App-logo" alt="logo" /> */}
                    <h1>SMALL SHOPS</h1>
                    <h2>BIG COMMUNITY!</h2>
                    <h4>Start your search by typing in the kind of business you'd like to patronize and select the parameters of businesses you'd like to support</h4>
                
               
                    <input type ="text" name="category" onChange={this.handleChange} value={this.state.search} placeholder="try 'plant shops'"/>
                    <Link to={`/categories/${this.state.category.id}/shops`} category={this.state.category} tags={this.state.tags.filter(t => t.checked === true)}> 
                        <button >Search</button> 
                    </Link>
                    {this.createTagCheckboxes()}
                
                </header>
                <Router> 
                    <Route exact path='/categories/:id/shops' component={CategoryContainer}> </Route>
                </ Router>

                {/* < CategoryContainer /> */}
            </div>
        )
    }
}

export default HomeSearch;
