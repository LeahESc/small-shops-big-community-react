import React from 'react'
import { Link } from 'react-router-dom'
import ShopTag from './ShopTag'

const Shop = ({url, name, id, description, social_impact, address, website, tags}) => {
    
    console.log('url', url)

    return (
        <div className='shop'>
            <Link to={`${id}`}>
                <h1 className='shop-name'>{name}</h1>
            </Link>
                <h3 className="shop-description">{description}</h3>
                {social_impact.length > 2 ? <h3 className='shop-impact'>Social Impact: {social_impact}</h3> : ''}
                <h4 className='shop-webaddress'>{address}</h4>
                <h4 className='shop-webaddress'>{website}</h4><br/>
            
                {tags.map(tag => <ShopTag key={tag.id} name={tag.name} /> )}
       </div>
    )
}

export default Shop