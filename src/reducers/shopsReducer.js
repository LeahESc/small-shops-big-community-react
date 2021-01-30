const shopsReducer = (state= {shops: [], loading: false}, action) => {
    switch (action.type) {
        case 'LOADING_SHOPS':
            return { ...state,
                shops: [...state.shops],
                loading: true
            }

        case 'SHOPS_LOADED':
            console.log(action)
            const tagOptions = action.tags 
            const shops = action.shops.filter(s => { 
                            if (s.tags.some(t => t.id === tagOptions[0].id)) {
                                return s 
                            } 
                        })
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