import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet';
import Logo from './../../taclog1.png'
import './index.scss'

const Home =()=> {

    return (
        <div className="homepage">
            <div className="home-write">
                <Helmet>
                    <meta charSet="UTF-8" />
                    <title>TAS HR Management System </title>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="icon" href={Logo} />
                </Helmet>
                <h1> the ambassadors schools employee management system</h1>
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