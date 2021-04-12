import React from 'react'
import ReviewForm from '../components/ReviewForm'
import Reviews from '../components/Reviews'
import Shop from '../components/Shop'
import ShopCarousel from '../components/ShopCarousel'
import ShopMap from '../components/ShopMap'
import { Grid, Item } from 'semantic-ui-react'
import { useSelector } from 'react-redux'
import uuid from 'react-uuid'

const ShopContainer = (props) => {
        
    const categories = useSelector(state => state.categoriesReducer.categories)
    
    const urlArray = props.match.url.split('/')
    const categoryId = parseInt(urlArray[2])
    const shopId = parseInt(urlArray[urlArray.length-1])
    const category = categories.find(category => category.id === categoryId)
    const shop = category.shops.find(shop => shop.id === shopId)

    return (
        <div>
        <Item key={uuid()} >
            <Item.Content key={uuid()} >
                <ShopCarousel key={uuid()}  shop={shop} />
            </Item.Content>
        </Item >
        <Grid key={uuid()} columns={3} >
            <Grid.Column  key={uuid()} width={10}>
                <Item.Group key={uuid()} divided>
                    <Item key={uuid()} >
                    <br/>
                        <Item.Content key={uuid()} >
                            <Shop key={uuid()} 
                                url={props.match.url} 
                                category_id={categoryId} 
                                name={shop.name} 
                                id={shop.id} 
                                description={shop.description} 
                                social_impact={shop.social_impact} 
                                address={shop.address} 
                                website={shop.website} 
                                tags={shop.tags}/> 
                        </Item.Content>
                    </Item>
                </Item.Group>
                <ReviewForm key={uuid()}shop={shop} category={category}/>
                <Reviews key={uuid()} shop={shop}  />
            </Grid.Column>
            
            <Grid.Column key={uuid()}width={4} floated='left'>
                <ShopMap key={uuid()}shop={shop} />
            </Grid.Column>
            <Grid.Column key={uuid()}width={2}></Grid.Column>
        </Grid>
        </div>
    )
}

export default ShopContainer 