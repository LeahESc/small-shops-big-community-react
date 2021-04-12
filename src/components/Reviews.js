import React, { Component } from 'react'
import Review from './Review'
import { Card } from 'semantic-ui-react'

 
const Reviews = () => { 
    
    const reviews = this.props.shop.reviews
    const shop = this.props.shop
    if (reviews.length <1) {
        return   ''
    } else { 
    return (
        <div className='reviews'>
            <h3>Check out {shop.name}'s latest reviews!</h3>
            {reviews.map(r => (
                <Card fluid color='yellow' > 
                <Review key={r.id} text={r.text} shop={r.shop} /> 
                </Card>
            ))}
        </div>
    )}
}

export default Reviews