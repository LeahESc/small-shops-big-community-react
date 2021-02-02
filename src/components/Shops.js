import React, { Component } from 'react'
import Shop from './Shop'


export default class Shops extends Component {
    render() {
        
        return (
            <div className="shop-list">
            {this.props.shops.map(shop => <Shop 
                style={{
                    flex: 2,
                    flexDirection: 'column',
                    alignContent: 'flex-start',
                    height: '100'
                    }}
                key={shop.id} category={shop.category} name={shop.name} description={shop.description} social_impact={shop.social_impact} address={shop.address} website={shop.website} tags={shop.tags}/> )}
            </div>
        )
    }
}
