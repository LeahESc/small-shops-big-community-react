import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default class ReviewForm extends Component {
    render() {
        return (
            <div>
                <form>
                <Form.Group>
                    <Form.Label>Example textarea</Form.Label>
                        <Form.Control as="textarea" rows={3} size="lg" type="text" placeholder="Large text"/>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                </Form.Group>
                <br />
                </form>
            </div>
        )
    }
}
