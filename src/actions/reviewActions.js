export const addReview = () => { 
    return (dispatch) => { 
        dispatch({ type:'ADDING_REVIEW'})
        fetch('http://localhost:3001/reviews', configObj={

        })
        .then(response => response.json())
        .then(data => {
            return dispatch({ type:'REVIEW_ADDED', review: data })
        })
    }
}
