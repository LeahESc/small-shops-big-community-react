import React, { Component } from 'react'
import Review from './Review'

export default class Reviews extends Component {
    

    render() {
        console.log("shop", this.props.shop)
        // const reviews = this.props.shop.reviews
        return (
            <div>
                {/* {reviews.map(r => <Review key={r.id} text={r.text} shop={r.shop} /> )} */}
            </div>
        )
    }
}
