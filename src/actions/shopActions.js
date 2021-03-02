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

