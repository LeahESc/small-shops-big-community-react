import React from 'react'
import { Icon } from 'semantic-ui-react'

const ShopTag = ({name}) => {
    return (
        <div className='shoptag'>
        <Icon name='hand peace' color='pink' /> {name}
        </div>   
    )
}
export default ShopTag