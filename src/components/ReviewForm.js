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
        if (this.state.text === '') {
            alert('Please write a review before hitting submit')
        } else { 
        const category = this.props.category
        const newReview = {...this.state, shop_id: this.props.shop.id}
        console.log("review obj:", newReview)
        this.props.addReview(newReview, category)
        this.setState({
            text: ''
        })}
    }

    render() {
        return (
            <div className='review-form'>
                <p className='review-text'>Visited this shop recently? What did you purchase that you love? Leave a review below!</p> 
            
                <Form onSubmit={this.handleSubmit}> 
                    <TextArea id={this.props.shop.id} onChange={this.handleChange} value={this.state.text} placeholder="The owners here are incredible!" />
                    <Button color="yellow" type="submit">
                        Submit
                    </Button>
                    <br/>
                    <br/>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = state => { 
    return { 
        categories: state.categoriesReducer.categories, 
    }
}
export default connect(mapStateToProps, {addReview})(ReviewForm)