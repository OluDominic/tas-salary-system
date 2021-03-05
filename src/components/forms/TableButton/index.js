import React from 'react';
import './index.scss';

const TableButton =({ children, ...otherProps })=> {

    return (
            <button className="table-btn" {...otherProps}>
                {children}
            </button>
    );
}

export default TableButton;