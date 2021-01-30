const shopsReducer = (state= {shops: [], loading: false}, action) => {
    switch (action.type) {
        case 'LOADING_SHOPS':
            return { ...state,
                shops: [...state.shops],
                loading: true
            }

        case 'SHOPS_LOADED':
            console.log(action)
            let shops = action.shops
            const tagOptions = action.tags 
            // this filter method works for now but only matches the first tag to the first tag in the selected parameters
            shops.filter(s => { 
                if (s.tags.some(t => t.id === tagOptions[0].id)) {
                    return s } })
            console.log("filtered shops:", shops)
            return {
                ...state,
                shops: shops,
                loading: false
            }
            
        default:
            return state
    }  
}

export default shopsReducer