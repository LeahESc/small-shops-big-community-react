import React, { Component } from 'react'
import '../App.css'
import TagCheckbox from '../components/TagCheckbox'
import Suggestions from '../components/Suggestions'
import { connect } from 'react-redux'
import { Button, Input, Container } from 'semantic-ui-react'
import uuid from 'react-uuid'

class HomeSearch extends Component {
    state = {
        search: '',
        results: [],
        tags: [
            {id: 1, name:"BIPOC-OWNED", checked: false},
            {id: 2, name:"WOMEN/WOMXN-OWNED", checked: false},
            {id: 3, name:"LGBTQ+-OWNED", checked: false},
            {id: 4, name:"SOCIAL IMPACT COMMITMENT", checked: false}
        ],
    }

    getInfo = () => {
        let m = this.state.search.substring(0,1)
        this.setState({
            results: this.props.categories.filter(c => c.name.startsWith(m))
        })
    }

    handleChange = (e) => {
        this.setState({
            ...this.state,
            search: e.target.value
        }, () => {
            if (this.state.search && this.state.search.length >= 2) {
                this.getInfo()
            }
        })
    }

    handleQueryResultClick = (e) => {
        const searchResultName = e.target.id;
        this.setState({
            search: searchResultName,
            results: []
        })
    }

    createTagCheckboxes = () =>  this.state.tags.map(tag => <div className='tag-checkbox'> <TagCheckbox key={tag.id} value={tag.name} checked={tag.checked} handleCheck={this.handleCheck} /> </div>)
    
    handleCheck = (e) => {
        const name = e.target.name;
        this.setState({  
            ...this.state,
            tags: [
            ...this.state.tags.map(tag => {
                if (tag.name === name ) {
                    return {...tag, checked: !tag.checked}
                } else {
                    return tag
                }
            })]
        })
    };

    handleClick = (e) => {
        const matchedCategory = this.props.categories.find(category => category.name.substring(0,3) === this.state.search.substring(0,3))
        if (!matchedCategory) {
            alert("Sorry, we can't find anything for that category. Try searching for type of shop like: 'restaurants' or 'bakeries' or 'wine shops' or 'yoga studios' ")
        } else { 
            const selectedTags = this.state.tags.filter(tag => tag.checked === true)
            if (selectedTags.length < 1) {
                this.props.history.push(`/categories/${matchedCategory.id}/shops`)
            } else { 
                const tagNames = selectedTags.map(tag => tag.name.split(' ').join('_'))
                const queryString="?q="+ tagNames.join('&')
                this.props.history.push(`/categories/${matchedCategory.id}/shops/${queryString}`)
            }
        }
    }

    render() {
        return (
            <Container> 
                <h1>SMALL SHOPS</h1>
                <h2>BIG COMMUNITY</h2>
                <h4>Start your search by typing in the kind of business you'd like to patronize and selecting one (or more!) community parameters</h4>
                <Button onClick={this.handleClick} floated="right" color='yellow' padding='15px'>
                    Search
                </Button>
                <Input 
                    fluid type="text" 
                    ref={input => this.search = input}
                    name="category" 
                    onChange={this.handleChange} 
                    value={this.state.search} 
                    placeholder="Search for a type of business..."
                />
                <Suggestions results={this.state.results} handleQueryResultClick={this.handleQueryResultClick} />
                <br/>
                {this.createTagCheckboxes()}
                
            </Container>
            
        )
    }
}

const mapStateToProps = (state) => {
    return {
      categories: state.categoriesReducer.categories
    }
  }

export default connect(mapStateToProps)(HomeSearch);
