import React, { Component } from 'react'
import '../App.css'
import TagCheckbox from './TagCheckbox'
import CategoryContainer from '../containers/CategoryContainer'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom'

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
        // this.setState({ 
        //     category: '',
        //     tags: initialTags,
        // })   
    }  
    
    render() {
        return (
            <div>
                <header className="header">
                {/* <img src={logo} className="App-logo" alt="logo" /> */}
                    <h1>SMALL SHOPS</h1>
                    <h2>BIG COMMUNITY!</h2>
                    <h4>Start your search by typing in the kind of business you'd like to patronize and select the parameters of businesses you'd like to support</h4>
                
                <form >
                    <input type ="text" name="category" onChange={this.handleChange} value={this.state.category} placeholder="try 'plant shops'"/>
                    <Link to='/categories/:id/shops' onClick={this.handleSubmit} category={this.state.category} tags={this.state.tags.filter(t => t.checked === true)}> 
                        <button >Search</button> 
                    </Link>
                    {this.createTagCheckboxes()}
                </form>
                </header>
                <Router> 
                    <Route exact path='/categories/:id/shops' componend={CategoryContainer}> </Route>
                </ Router>

                {/* < CategoryContainer /> */}
            </div>
        )
    }
}

export default HomeSearch;
