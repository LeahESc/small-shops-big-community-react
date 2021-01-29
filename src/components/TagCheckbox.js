import React from 'react'

const TagCheckbox = ({value, checked, handleCheck}) => { 
    return ( 
        <div>
             <label>
                 <input 
                    type="checkbox"
                    name={value}
                    checked={checked}
                    onChange={handleCheck}
                    className="form-check-input" 
                    />
                    {value}
                </label>
        </div>
    )
}

export default TagCheckbox
