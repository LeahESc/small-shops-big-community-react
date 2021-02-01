const categoriesReducer = (state={categories: [], loading: false}, action) => { 
    switch (action.type) {
        case 'LOADING_CATEGORIES':
            return { ...state,
                categories: [...state.categories],
                loading: true
            }

        case 'CATEGORIES_LOADED': 
        return {
            ...state,
            categories: action.categories,
            loading: false
        }

        default: 
        return state
    }
}

export default categoriesReducer