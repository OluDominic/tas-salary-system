import React from 'react'
import './index.scss'

const SideNav =({ children })=> {

    return (
        <div className="sideNav">
            <div className="menu">
                {children}
            </div>
        </div>
    );
}

export default SideNav