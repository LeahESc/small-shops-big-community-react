import React from 'react'
import shopicon from '../images/shopicon.jpg'
import Shop from './Shop'
import { Item } from 'semantic-ui-react'


const Shops = (props) => { 
    return (
        <>
        {props.shops.map(shop => ( 

        <Item.Group divided>
            <Item>
                <Item.Image src={shopicon} />

                <Item.Content>
                    <Shop key={shop.id} 
                        url={props.url} 
                        category_id={shop.category_id} 
                        name={shop.name} id={shop.id} 
                        description={shop.description} 
                        social_impact={shop.social_impact} 
                        address={shop.address} 
                        website={shop.website} 
                        tags={shop.tags}/> 
                </Item.Content>
            </Item>
        </Item.Group>
        ))}
        </>
    )
}
export default Shops;
