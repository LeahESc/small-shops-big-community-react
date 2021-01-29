import React from 'react'

const TagCheckbox = ({props}) => { 
    return ( 
        <div>
             <label>{value}</label>
            <input type="checkbox"  value={value} checked={checked} onChange={handleCheck}/>
        </div>
    )

}

export default TagCheckboxes