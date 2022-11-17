import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet'
import Logo from './../../taclog1.png';
import './index.scss'

const Profile =()=> {
    const [date, setDate] = useState(new Date());
    let [userdata,setUserdata] = useState({});

    const today = new Date();

    useEffect(() => {

        const timer = setInterval(()=> setDate(new Date()), 1000)

        return function cleanup() {
            clearInterval(timer)
        }
    })

    useEffect(() => {
        let data = localStorage.getItem('userdata')

        if (!data) {
           // history.push('/')
        }
        else{
            data=JSON.parse(data);
            //console.log(data,'popop')
      setUserdata(data);
        }
    },[]);

    const months = ["January", "Febuary", "March", "April", "May", "June", "July",
                "August", "September", "October", "November", "December"]

    

    return (
        <div className="profile">
            <div className="name">
            <Helmet>
                    <meta charSet="UTF-8" />
                    <title>HR Management | Employee Home </title>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="icon" href={Logo} />
            </Helmet>
                <h2>Welcome, {userdata.usertype=='admin'?'Admin':userdata.surname}</h2>
                <div className="date">
                    <p>{date.toLocaleTimeString()}</p>
                    <p>{date.toLocaleDateString('default', { weekday: 'long', month: "long", day: 'numeric', year: "numeric"})}</p>
                </div>
            </div>
            <div className="name-sub">
                <div className="sub">
                <h2>Department</h2>
                <span>{userdata.usertype=='admin'?'Admin':userdata.department}</span>
                </div>
                <div className="sub-school">
                    <h2>school</h2>
                    <span>{userdata.usertype=='admin'?'Admin':userdata.school}</span>
                </div>
                <div className="sub-title">
                    <h2>ID</h2>
                    <span>{userdata.usertype=='admin'?'Admin':userdata.staffid}</span>
                </div>
            </div>
        </div>
    );
}

export default Profile