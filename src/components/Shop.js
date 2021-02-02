import React from 'react'
import { Link } from 'react-router-dom'

const Shop = ({name, description, social_impact, address, website, tags}) => {
    
    return (
        <div className='body'>
            <Link to={`categories/${shop.category.id}/shops/${key}`}>
                <h1 className='shop-name'>{name}</h1>
            </Link>
            <h3 className="shop-description">{description}</h3>
            {social_impact.length > 2 ? <h3 className='shop-impact'>Social Impact: {social_impact}</h3> : ''}
            <h4 className='shop-webaddress'>{address}</h4>
            <h4>{website}</h4>
            {tags.map(tag => <h4 className='shop_tag'>{tag.name} </h4>)}
            {/* <Route path={`${match.path}/:shopId`} component={ShopContainer}/> */}
        </div>
    )
}

export default Shop