export const fetchReviews = () => { 
    return (dispatch) => { 
        dispatch({ type:'LOADING_REVIEWS'})
        fetch('http://localhost:3001/reviews')
        .then(response => response.json())
        .then(data => {
            return dispatch({ type:'REVIEWS_LOADED', reviews: data })
        })
    }
}

export const addReview = (review) => { 
    return (dispatch) => { 
        dispatch({ type:'ADD_REVIEW'})
        fetch('http://localhost:3001/reviews', {
            method: 'POST',
            body: JSON.stringify(review),
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            return dispatch({ type:'REVIEW_ADDED', review: data })
        })
    }
}
