import React, { Component } from 'react'
import {Form, TextArea, Button } from 'semantic-ui-react'
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
            <div className='review-form'>
                <p className='review-text'>Visited this shop recently? What did you purchase that you love? Leave a review below!</p> 
                <p className='review-text'> Please try to keep all reviews constructive or down-right positive! </p>
            
                {/* <form onSubmit={this.handleSubmit}>  */}
                <Form onSubmit={this.handleSubmit}> 
                
                    <p className='review-text'>Write your review below!</p>
                        <TextArea id={this.props.shop.id} onChange={this.handleChange} value={this.state.text} placeholder="The owners here are incredible!" />
                        <Button color="yellow" type="submit">
                            Submit
                        </Button>
                        <br/>
                {/* </Form.Group> */}
                <br />
                </Form>
                {/* </form> */}
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