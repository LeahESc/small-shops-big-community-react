import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react'
import TagCheckbox from './TagCheckbox'
import addShop from '../actions/shopActions'
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
            {id: 1, name:"BIPOC-OWNED", checked: false},
            {id: 2, name:"WOMEN/WOMXN-OWNED", checked: false},
            {id: 3, name:"LGBTQ+-OWNED", checked: false},
            {id: 4, name:"SOCIAL IMPACT COMMITMENT", checked: false}
        ],
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

    handleChange = (e) => { 
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })    
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if (this.state.name === ''|| this.state.description === ''|| this.state.address === '' || this.state.website === '' ) {
            alert("You must include a name, description, address and website for this business")
        } else { 
        const selectedTags = this.state.tags.filter(tag => tag.checked === true)
            if (selectedTags.length < 1) {
                alert("Please select one or more 'tags' for this business")
            } else { 
                const tagObjects = selectedTags.map(tag => tag.id)
                const newShop = {...this.state, tag_ids: tagObjects}
                this.props.addShop(newShop, this.props.category)
                // this.props.addShopTag(selectedTags, newShop, this.props.category)
                this.setState({
                    name: '',
                    category_id: this.props.category.id,
                    description: '',
                    social_impact: '',
                    address: '',
                    website: '',
                    tags: [
                        {id: 1, name:"BIPOC-OWNED", checked: false},
                        {id: 2, name:"WOMEN/WOMXN-OWNED", checked: false},
                        {id: 3, name:"LGBTQ+-OWNED", checked: false},
                        {id: 4, name:"SOCIAL IMPACT COMMITMENT", checked: false}
                    ],
                })
            }
        }
    }

    render() {
        return (
            <div className='new-shop-form'>
                <br />
                <h4>Don't see the business you're looking for? Add it!</h4>
            <Form onSubmit={this.handleSubmit}>
                 <Form.Input
                    // error={{ content: 'Please enter your first name', pointing: 'below' }}
                    fluid
                    label='Shop Name'
                    name='name'
                    placeholder=''
                    id='form-input-shop-name'
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