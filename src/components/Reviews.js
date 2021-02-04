import React, { Component } from 'react'
import Review from './Review'

export default class Reviews extends Component {
    

    render() {
        const reviews = this.props.shop.reviews
        const shop = this.props.shop

        return (
            <div className='reviews'>
                <h3>Check out {shop.name}'s latest reviews!</h3>
                {reviews.map(r => <Review key={r.id} text={r.text} shop={r.shop} /> )}
            </div>
        )
    }
}
