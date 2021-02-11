import React from 'react'
import './index.scss'
import Avater from './../../avatar.png'

const UserProfile =(props)=> {

    return (
        <div className="userProfile">
            <div className="portal">
                <h1>My Portal</h1>
            </div>
            <ul>
                <li>
                    <div className="avatar">
                        <img src={Avater} alt="avatar" />
                    </div>
                </li>
                <li>
                    <span className="displayName">
                        Welcome User
                    </span>
                </li>
            </ul>
        </div>
    );
}

export default UserProfile;