import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux'
import {addReview} from '../actions/reviewActions'

class ReviewForm extends Component {
    
    state= {
        text: ''
    }
    
    handleChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const review = this.state
        this.props.addReview(review)
        this.setState({
            text: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}> 
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Write your review below!</Form.Label>
                        <Form.Control as="textarea" size="lg" type="text" id={this.props.shop.id} onChange={this.handleChange} value={this.state.text} placeholder="The owners here are incredible!" />
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
export default connect(null, {addReview})(ReviewForm)