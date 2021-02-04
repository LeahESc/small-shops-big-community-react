import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react'
import TagCheckbox from './TagCheckbox'
import {addShop} from '../actions/shopActions'
import { connect } from 'react-redux'

class ShopForm extends Component {
    state = {
        name: '',
        category_id: this.props.category.id,
        description: '',
        social_impact: '',
        address: '',
        website: '',
        tags: [
            {id: 1, value:"BIPOC-OWNED", checked: false},
            {id: 2, value:"WOMEN/WOMXN-OWNED", checked: false},
            {id: 3, value:"LGBTQ+-OWNED", checked: false},
            {id: 4, value:"SOCIAL IMPACT COMMITMENT", checked: false}
        ],
    }

    createTagCheckboxes = () =>  this.state.tags.map(tag => <div className='tag-checkbox'> <TagCheckbox key={tag.id} value={tag.value} checked={tag.checked} handleCheck={this.handleCheck} /> </div>)


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

    handleChange = (e) => { 
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })    
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const selectedTags = this.state.tags.filter(tag => tag.checked === true)
        const newShop = {...this.state, tags: selectedTags}
        this.props.addShop(newShop, this.props.category)
        this.setState({
            name: '',
            category_id: this.props.category.id,
            description: '',
            social_impact: '',
            address: '',
            website: '',
            tags: [
                {id: 1, value:"BIPOC-OWNED", checked: false},
                {id: 2, value:"WOMEN/WOMXN-OWNED", checked: false},
                {id: 3, value:"LGBTQ+-OWNED", checked: false},
                {id: 4, value:"SOCIAL IMPACT COMMITMENT", checked: false}
            ],
        })
    }

    render() {
        return (
            <div className='new-shop-form'>
                <h4>Don't see the business you're looking for in this search? Add it!</h4>
            <Form onSubmit={this.handleSubmit}>
                 <Form.Input
                    // error={{ content: 'Please enter your first name', pointing: 'below' }}
                    fluid
                    label='Shop Name'
                    name='name'
                    placeholder=''
                    id='form-input-first-name'
                    onChange={this.handleChange}
                    value={this.state.name}
                />
                <Form.Input
                    // error={{ content: 'Please enter your first name', pointing: 'below' }}
                    fluid
                    label='Shop Description'
                    name='description'
                    placeholder=''
                    id='form-input-shop-description'
                    onChange={this.handleChange}
                    value={this.state.description}
                />
                <Form.Input
                    // error={{ content: 'Please enter your first name', pointing: 'below' }}
                    fluid
                    label='Social Impact (if any)'
                    name='social_impact'
                    placeholder=''
                    id='form-input-shop-impact'
                    onChange={this.handleChange}
                    value={this.state.social_impact}
                />
                <Form.Input
                    // error={{ content: 'Please enter your first name', pointing: 'below' }}
                    label='Address'
                    name='address'
                    placeholder=''
                    id='form-input-shop-impact'
                    onChange={this.handleChange}
                    value={this.state.address}
                />
                <Form.Input
                    // error={{ content: 'Please enter your first name', pointing: 'below' }}
                    label='Website'
                    name='website'
                    placeholder=''
                    id='form-input-shop-impact'
                    onChange={this.handleChange}
                    value={this.state.website}
                />
                {this.createTagCheckboxes()}
                <Button type='submit'>Submit</Button>
            </Form>
            </div>
        )
       
    }
}

export default connect(null, { addShop })(ShopForm)