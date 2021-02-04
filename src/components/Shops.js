import React, { Component } from 'react'
import shopicon from '../images/shopicon.jpg'
import Shop from './Shop'
import { Grid, Divider, Item } from 'semantic-ui-react'

export default class Shops extends Component {
    render() {
        
        return (
            <>
            {this.props.shops.map(shop => ( 
            // <Grid> 
            //     <Grid.Row> 
            //         <div className='shop'>
            //         <Shop key={shop.id} url={this.props.url} category_id={shop.category_id} name={shop.name} id={shop.id} description={shop.description} social_impact={shop.social_impact} address={shop.address} website={shop.website} tags={shop.tags}/> 
            //         </div>
            //     </Grid.Row>
            // </Grid>


            <Item.Group divided>
            <Item>
            <Item.Image src={shopicon} />

            <Item.Content>
                <Shop key={shop.id} url={this.props.url} category_id={shop.category_id} name={shop.name} id={shop.id} description={shop.description} social_impact={shop.social_impact} address={shop.address} website={shop.website} tags={shop.tags}/> 

                {/* <Item.Header as='a'>12 Years a Slave</Item.Header>
                <Item.Meta>
                <span className='cinema'>Union Square 14</span>
                </Item.Meta>
                <Item.Description>{paragraph}</Item.Description>
                <Item.Extra>
                <Label>IMAX</Label>
                <Label icon='globe' content='Additional Languages' />
                </Item.Extra> */}
            </Item.Content>
            </Item>
            </Item.Group>
            ))}
            </>
        )
    }
}
