import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default class ReviewForm extends Component {
    
    state= {
        text: ''
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}> 
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Write your review below!</Form.Label>
                        <Form.Control as="textarea" size="lg" type="text"  id={this.props.shop.id} onChange={this.handleChange} value={this.state.text} placeholder="The owners here are incredible!" />
                        <hidden input id={this.props.shop.id} />
                        <Button variant="light" type="submit">
                            Submit
                        </Button>
                </Form.Group>
                <br />
                </form>
            </div>
        )
    }
}
