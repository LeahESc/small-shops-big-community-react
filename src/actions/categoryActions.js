const fetchCategories = () => { 
    return (dispatch) => { 
        dispatch({ type:'LOADING_CATEGORIES'})
        fetch('http://localhost:3001/categories')
        .then(response => response.json())
        .then(data => {
            return dispatch({ type:'CATEGORIES_LOADED', categories: data })
        })
    }
}

export default fetchCategories
