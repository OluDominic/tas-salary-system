import React from 'react'
import './index.scss'
import { Link } from 'react-router-dom'
import tacLogo from './../../taclog1.png'

const Header =()=> {

    return (
            <header className="header">
                <div className="head-sub">
                    <div className ="taclogo">
                        <Link to="/">
                        <img src={tacLogo} alt="taclogo" />
                        </Link>
                    </div>
                    
                    <div className="tac-mess">
                        <h2>...citadel of knowledge</h2>
                    </div>
                </div>
            </header>
    );
}

export default Header;