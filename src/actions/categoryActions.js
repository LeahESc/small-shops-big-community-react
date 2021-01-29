export const fetchShops = (c) => {
    c.split('')
    return (dispatch) => {
        dispatch({ type: 'LOADING_SHOPS' })
        fetch('http://localhost:3001/shops')
        .then(response => response.json())
        .then(shops => {
            shops.map(shop => {
                if (shop.category.name === c[0]){
                    return shop
                }
                return dispatch({ type: 'SHOPS_LOADED', shops: shops })
            })
        })
    }
}
export default fetchShops