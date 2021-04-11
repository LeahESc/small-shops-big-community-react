import React from 'react'
import uuid from 'react-uuid'

const Suggestions = ({results, handleQueryResultClick}) => {
    
    const options = results.map(r => (
        <li className='search-results' key={uuid()} id={r.name} onClick={handleQueryResultClick}>{r.name}</li>
    ))

    return (
        <ul>{options}</ul>
    )
}

export default Suggestions