import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import EmployeeSidebar from '../../components/employeeSideBar'
import SideNav from '../../components/sideNav'

const SsLay =(props)=> {
    const history = useHistory()

    useEffect(()=> {
        let usedata = JSON.parse(localStorage.getItem('userdata'))

        if(usedata && usedata.usertype =='employee') {
            console.log('userdata')
        } else {
            history.push('/')
        }
    })
    
    return (
        <div style={{background: "white"}}  className="adminLay">
            
            <div className="controlPanel">
                <div className="sidebar">
                    <SideNav>
                        <EmployeeSidebar />
                    </SideNav>
                </div>
                <div className="content">
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default SsLay;