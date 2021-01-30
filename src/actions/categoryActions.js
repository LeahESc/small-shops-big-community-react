export const fetchShops = (state) => {
    const category = state.category.split(' ')
    const tags = state.tags.filter(tag => tag.checked === true)
    return (dispatch) => {
        dispatch({ type: 'LOADING_SHOPS' })
        fetch('http://localhost:3001/shops')
        .then(response => response.json())
        .then(shops => {
            const filteredShops = shops.filter(s => s.category.name === category[0]) 
            return dispatch({ type: 'SHOPS_LOADED', shops: filteredShops, tags: tags})
        } )
    }
}
export default fetchShops