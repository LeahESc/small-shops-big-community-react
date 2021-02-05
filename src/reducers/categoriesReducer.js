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

        case 'ADD_REVIEW': 
        return {
            ...state,
            categories: [...state.categories],
            loading: true
        }

        case 'REVIEW_ADDED': 
        // const category = action.category
        const reducedCategories = state.categories.filter(c => c.id !== action.category.id)
        const shop = action.category.shops.find(shop => shop.id === action.review.shop_id)
        const reducedShops = action.category.shops.filter(shop => shop.id !== action.review.shop_id)
        const review = action.review
        const updatedShop = {...shop, reviews: [...shop.reviews, review]}
        const updatedCategory = {...action.category, shops: reducedShops.concat(updatedShop)}

        return {
                ...state, 
                categories: reducedCategories.concat(updatedCategory),
                loading: false
            }
         

        case 'ADD_SHOP': 
        return {
            ...state,
            categories: [...state.categories],
            loading: true
        }

        case 'SHOP_ADDED': 
        const newShop = action.shop
        const filteredCategories = state.categories.filter(c => c.id !== action.category.id)
        const newCategory = {...action.category, shops: [...action.category.shops, newShop]}
        
        return {
            ...state, 
            categories: filteredCategories.concat(newCategory),
            loading: false
        }
        default: 
        return state
    }
}

export default categoriesReducer

// this seems more correct for the return of 'REVIEW_ADDED' but when I did this in console it doubled the category and shop ???? 
// {...state, 
//     categories: [...state.categories, 
//         {...category, shops: [...category.shops, 
//             {...shop, reviews: [...shop.reviews, review]
//             }
//         ]}
//     ]
// }


//  old review reducer return: 
// ...state, 
// categories: [{...category, 
//     shops: [{...shop, 
//         reviews: [...shop.reviews, review]
//     }]
// }],
// loading: false
// }