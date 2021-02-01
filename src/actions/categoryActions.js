export const fetchCategories = () => { 
    return (dispatch) => { 
        dispatch({ type: 'LOADING_CATEGORIES'})
        fetch('http://localhost.3001/categories')
        .then(response => response.json())
        .then(categories => {
            return dispatch({ type:'CATEGORIES_LOADED', categories: categories })
        })
    }
}

export default fetchCategories

// export const fetchShops = (state) => {
//     const cat = state.category.substring(0,4)
//     console.log("substring of category for matching", cat)
//     const tags = state.tags.filter(tag => tag.checked === true)
//     return (dispatch) => {
//         dispatch({ type: 'LOADING_SHOPS' })
//         // fetch('http://localhost:3001/shops')
//         fetch('http://localhost:3001/categories')
//         .then(response => response.json())
//         // .then(shops => {
//         //     const filteredShops = shops.filter(s => s.category.name.substring(0,3) === category) 
//         .then(categories => {
//             const foundCategory = categories.find(category => category.name.substring(0,4) === cat)
//             return fetch(`http://localhost:3001/categories/${foundCategory.id}/shops`)
//             .then(response => response.json()) 
//             .then(shops => { 
//                 const foundShops = shops
//                 return dispatch({ type: 'SHOPS_LOADED', shops: foundShops, tags: tags})
//             })
            
//         })
//     }
// }
// export default fetchShops