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
        const category = action.category
        const shop = category.shops.find(shop => shop.id === action.review.shop_id)
        const review = action.review
        return {
            ...state, 
            categories: [{...category, 
                shops: [{...shop, 
                    reviews: [...shop.reviews, review]
                }]
            }],
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