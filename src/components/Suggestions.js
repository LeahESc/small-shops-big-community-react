import React from 'react'
import uuid from 'react-uuid'

const Suggestions = ({results, handleQueryResultClick}) => {
    
    const options = results.map(r => (
        <li class='search-results' key={uuid()} id={r.name} onKeyDown={handleKeyDown} onClick={handleQueryResultClick}>{r.name}</li>
    ))
    return (
        <ul>{options}</ul>
    )
}

export default Suggestions