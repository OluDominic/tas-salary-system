import React from 'react'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';

const Footer =()=> {

    return (
        <footer className="footer">
            <div className="footer-sub">
                <span className="font-icon">
                    <FontAwesomeIcon icon={faCopyright} />
                2021 The Ambassadors College. 
                </span>

                <span className="rights">
                All rights reserved
                </span>
            </div>
        </footer>
    );
}

export default Footer