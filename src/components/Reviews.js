import React, { Component } from 'react'
import Review from './Review'

export default class Reviews extends Component {
    

    render() {
        const reviews = this.props.shop.reviews
        
        return (
            <div className='reviews'>
                <h3>Check out Barcito's latest reviews!</h3>
                {reviews.map(r => <Review key={r.id} text={r.text} shop={r.shop} /> )}
            </div>
        )
    }
}
