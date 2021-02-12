import React, { useState } from 'react';

const Dropdown =({ title, items =[], multiselect})=> {

    const [open, setOpen] = useState(false);
    const [selection, setSelection] = useState([])

    const Toggle =()=> {
        setOpen(!open);
    }

    function handleClick(item) {}

        return (
            <div className="dd-wrapper">
                <div tabIndex={0} 
                className="dd-header" 
                role="button" 
                onKeyPress={()=> Toggle(!open)}
                onClick={()=> Toggle(!open)}>
                <div className="dd-header-title">
                    <p className="dd-header-title-bold">{title}</p>
                </div>
                <div className="dd-header-action">
                    <p>{open ? 'Close' : 'Open'} </p>
                </div>
                </div>
                {open && (
                    <ul>
                      {items.map(item => (
                          <li key={item.id}>
                            <button type="button" onClick={()=> handleClick(item)}>
                                <span>{item.value}</span>
                                <span>Selected...</span>
                            </button>
                          </li>
                      ))}  
                    </ul>
                )}
            </div>
        );
}

export default Dropdown;