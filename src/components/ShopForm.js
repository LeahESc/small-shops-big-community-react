import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react'

export default class ShopForm extends Component {
    render() {
        return (
            
            <Form>
                 <Form.Input
                    // error={{ content: 'Please enter your first name', pointing: 'below' }}
                    fluid
                    label='First name'
                    placeholder='First name'
                    id='form-input-first-name'
                />
                <Form.Field>
                    <label>Address</label>
                    <input placeholder='' />
                </Form.Field>
                <Form.Field>
                    <label>Description</label>
                    <input placeholder='Type up a few words about this shop' />
                </Form.Field>
                <Form.Field>
                </Form.Field>
                <Button type='submit'>Submit</Button>
            </Form>
        )
       
    }
}

