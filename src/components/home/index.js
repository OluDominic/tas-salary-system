import React from 'react'
import Login from '../login'
import { Link } from 'react-router-dom'
import './index.scss'

const Home =()=> {

    return (
        <div className="homepage">
            <div className="home-write">
                <h1> the ambassadors employee management system</h1>
                <div className="home-login">
                <span>Click here to  </span>
            
                    <div className="tac-link">
                                <ul>
                                    <li>
                                        <Link to="/login">
                                            Login
                                        </Link>
                                    </li>
                                </ul>
                    </div>
            
                </div>
            </div>

            
        </div>
    );
}

export default Home;