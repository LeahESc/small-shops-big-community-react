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
        const category = this.props.category
        const newReview = {...this.state, shop_id: this.props.shop.id}
        console.log("review obj:", newReview)
        this.props.addReview(newReview, category)
        this.setState({
            text: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}> 
                {/* <Form.Group > */}
                    <Form.Label>Write your review below!</Form.Label>
                        <Form.Control as="textarea" size="lg" type="text" id={this.props.shop.id} onChange={this.handleChange} value={this.state.text} placeholder="The owners here are incredible!" />
                        <Button variant="light" type="submit">
                            Submit
                        </Button>
                {/* </Form.Group> */}
                <br />
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => { 
    return { 
        categories: state.categoriesReducer.categories, 
        // reviews: state.reviewsReducer.reviews
    }
}
export default connect(mapStateToProps, {addReview})(ReviewForm)