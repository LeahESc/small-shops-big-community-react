import React, { Component } from 'react'
import Shop from './Shop'
import { Grid, Divider } from 'semantic-ui-react'

export default class Shops extends Component {
    render() {
        
        return (
            <>
            {this.props.shops.map(shop => ( 
            <Grid> 
                <Grid.Row> 
                    <div className='shop'>
                    <Shop key={shop.id} url={this.props.url} category_id={shop.category_id} name={shop.name} id={shop.id} description={shop.description} social_impact={shop.social_impact} address={shop.address} website={shop.website} tags={shop.tags}/> 
                    </div>
                </Grid.Row>
            </Grid>
            ))}
            </>
        )
    }
}
