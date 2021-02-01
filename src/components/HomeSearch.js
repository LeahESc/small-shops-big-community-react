import React, { Component } from 'react'
import '../App.css'
import TagCheckbox from './TagCheckbox'
import CategoryContainer from '../containers/CategoryContainer'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';


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

    // componentDidUpdate() { 
    //     if (this.state.search.length > 3) {
    //         const matchedCategory = this.props.categories.find(category => category.name.substring(0,3) === this.state.search.substring(0,3))
    //         this.setState({
    //         ...this.state, 
    //         category: matchedCategory
    //     })
    //     }
    // }

    handleSubmit = (e) => { 
        e.preventDefault()
        const matchedCategory = this.props.categories.find(category => category.name.substring(0,3) === this.state.search.substring(0,3))
        this.setState({
            ...this.state, 
            category: matchedCategory,
            redirect: true
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
                {/* <Router>  */}
                {/* </Router> */}
            </div>
        )} else { 
            return (
                <div>
                <Redirect to={`/categories/${this.state.category.id}/shops`}   />
                <Route exact path="/categories/:id/shops" component={CategoryContainer} category={this.state.category} tags={this.state.tags.filter(t => t.checked === true)} />
                </div>      
            )
        }
    }
}

export default HomeSearch;
