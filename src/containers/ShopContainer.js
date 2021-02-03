import React, { Component } from 'react'
import ReviewForm from '../components/ReviewForm'
import Reviews from '../components/Reviews'
import ShopTag from '../components/ShopTag'
// import {fetchReviews} from '../actions/reviewActions'
import { connect } from 'react-redux'

class ShopContainer extends Component {
    // componentDidMount = () => { 
    //     this.props.fetchReviews()
    // }

    render() {
        const urlArray = this.props.match.url.split('/')
        const categoryId = parseInt(urlArray[2])
        const shopId = parseInt(urlArray[urlArray.length-1])
        const category = this.props.categories.find(category => category.id === categoryId)
        const shop = category.shops.find(shop => shop.id === shopId)

        return (
            <div className='body'>
                <div className='shop-body'>
                <h1 className='shop-name'>{shop.name}</h1>
                <h3 className="shop-description">{shop.description}</h3><br />
           
                {shop.social_impact.length > 2 ? <h3 className='shop-impact'>Social Impact: {shop.social_impact}</h3> : ''}
                <h4 className='shop-webaddress'>{shop.address}</h4>
                <h4>{shop.website}</h4><br/>
            
                {shop.tags.map(tag => <ShopTag key={tag.id} name={tag.name} /> )}
                <hr /> 
                <p>Visited this shop recently? What did you purchase that you love? Leave a review below!</p> 
                <p> Please try to keep all reviews constructive or down-right positive! This app does not support baseless negativity) </p>
            <ReviewForm shop={shop} category={category}/>
            <Reviews shop={shop}  />
            </div>
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
export default connect(mapStateToProps)(ShopContainer)