import React, { Component } from 'react'
import ReviewForm from '../components/ReviewForm'
import Reviews from '../components/Reviews'
import shopicon from '../images/shopicon.jpg'
import Shop from '../components/Shop'
import { Grid, Item } from 'semantic-ui-react'
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
        const imgURL="https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.otstatic.com%2Fprod%2F24713033%2F1%2Fhuge.jpg&imgrefurl=https%3A%2F%2Fwww.opentable.com%2Fr%2Fbarcito-los-angeles&tbnid=6ZRmw-0_6W-KBM&vet=12ahUKEwjhqNmAuM_uAhXIgZ4KHQ7LDLkQMygBegQIARAy..i&docid=QU73cxsH0fR9zM&w=1280&h=1280&q=barcitola%20restaurant%20images&ved=2ahUKEwjhqNmAuM_uAhXIgZ4KHQ7LDLkQMygBegQIARAy" 
        return (
            <div>
            <Grid columns={2} >
                <Grid.Column  width={10}>
                    <Item.Group divided>
                        <Item>
                        <img src={imgURL} alt='img'/>
                        {/* <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.otstatic.com%2Fprod%2F24713033%2F1%2Fhuge.jpg&imgrefurl=https%3A%2F%2Fwww.opentable.com%2Fr%2Fbarcito-los-angeles&tbnid=6ZRmw-0_6W-KBM&vet=12ahUKEwjhqNmAuM_uAhXIgZ4KHQ7LDLkQMygBegQIARAy..i&docid=QU73cxsH0fR9zM&w=1280&h=1280&q=barcitola%20restaurant%20images&ved=2ahUKEwjhqNmAuM_uAhXIgZ4KHQ7LDLkQMygBegQIARAy" alt='img'/> */}

                            <Item.Content>
                                <Shop key={shop.id} url={this.props.match.url} category_id={categoryId} name={shop.name} id={shop.id} description={shop.description} social_impact={shop.social_impact} address={shop.address} website={shop.website} tags={shop.tags}/> 
                            </Item.Content>
                        </Item>
                    </Item.Group>
                    <ReviewForm shop={shop} category={category}/>
                    <Reviews shop={shop}  />
                
                </Grid.Column>
            </Grid>
         </div>
        )
    }
}
            
            
//             <div className='body'>
//                 <div className='shop-body'>
//                 <h1 className='shop-name'>{shop.name}</h1>
//                 <h3 className="shop-description">{shop.description}</h3><br />
           
//                 {shop.social_impact.length > 2 ? <h3 className='shop-impact'>Social Impact: {shop.social_impact}</h3> : ''}
//                 <h4 className='shop-webaddress'>{shop.address}</h4>
//                 <h4>{shop.website}</h4><br/>
            
//                 {shop.tags.map(tag => <ShopTag key={tag.id} name={tag.name} /> )}
//                 <hr /> 
//                 <p>Visited this shop recently? What did you purchase that you love? Leave a review below!</p> 
//                 <p> Please try to keep all reviews constructive or down-right positive! This app does not support baseless negativity) </p>
//             <ReviewForm shop={shop} category={category}/>
//             <Reviews shop={shop}  />
//             </div>
//         </div>
//         )
//     }
// }

const mapStateToProps = state => { 
    return { 
        categories: state.categoriesReducer.categories, 
        // reviews: state.reviewsReducer.reviews
    }
}
export default connect(mapStateToProps)(ShopContainer)