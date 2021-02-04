const addShop = (shop, category) => { 
    const updatingCategory = category
    return (dispatch) => { 
        dispatch({ type:'ADD_SHOP'})
        fetch('http://localhost:3001/shops', {
            method: 'POST',
            body: JSON.stringify(shop),
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(shop => {
            return dispatch({ type:'SHOP_ADDED', shop: shop, category: updatingCategory })
        })
    }
}
export default addShop

// export const addShopTag = (tags, shop, category) => { 
//     const foundCategory = category
//     const foundShop = foundCategory.shops.filter(s => s.name === shop.name)[0]
//     // const shopId = foundShop.id
//     const shopTag = {shop_id: foundShop.id, tag_id: tags[0].id }
//     return (dispatch) => { 
//         dispatch({ type:'ADD_SHOPTAG'})
//         fetch('http://localhost:3001/shop_tags', {
//             method: 'POST',
//             body: JSON.stringify(shopTag),
//             headers: {
//                 'Content-type': 'application/json'
//             }
//         })
//         .then(response => response.json())
//         .then(shoptag => {
//             return dispatch({ type:'SHOPTAG_ADDED', shoptag: shoptag, category: foundCategory, shop: foundShop })
//         })
//     }
// }
