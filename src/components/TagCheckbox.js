import React from 'react'
// import { Checkbox } from 'semantic-ui-css'


const TagCheckbox = ({value, checked, handleCheck}) => { 
    return ( 
        <div className='tag-checkbox'>
            <label>
                <input 
                    type="checkbox"
                    name={value}
                    value = {value}
                    checked={checked}
                    onChange={handleCheck}
                />
            {value}
            </label>
        </div>
    )
}

export default TagCheckbox
