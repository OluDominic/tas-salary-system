import React, { useState, useEffect } from 'react'
import './index.scss'

const Profile =()=> {
    const [date, setDate] = useState(new Date())

    const today = new Date();

    useEffect(() => {

        const timer = setInterval(()=> setDate(new Date()), 1000)

        return function cleanup() {
            clearInterval(timer)
        }
    })

    const months = ["January", "Febuary", "March", "April", "May", "June", "July",
                "August", "September", "October", "November", "December"]

    

    return (
        <div className="profile">
            <div className="name">
                <h2>Welcome, Dominic Oludare</h2>
                <div className="date">
                    <p>{date.toLocaleTimeString()}</p>
                    <p>{date.toLocaleDateString('default', { weekday: 'long', month: "long", day: 'numeric', year: "numeric"})}</p>
                </div>
            </div>
            <div className="name-sub">
                <div className="sub">
                <h2>Department</h2>
                <span>Information Technology</span>
                </div>
                <div className="sub-school">
                    <h2>school</h2>
                    <span>Senior Secondary</span>
                </div>
                <div className="sub-title">
                    <h2>Title</h2>
                    <span>Software Developer</span>
                </div>
            </div>
        </div>
    );
}

export default Profile