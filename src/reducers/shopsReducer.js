const shopsReducer = (state= {shops: [], loading: false}, action) => {
    switch (action.type) {
        case 'LOADING_SHOPS':
            return { ...state,
                shops: [...state.shops],
                loading: true
            }

        case 'SHOPS_LOADED':
            return {
                ...state,
                shops: action.shops,
                loading: false
            }
            
        default:
            return state
    }  
}

export default shopsReducer