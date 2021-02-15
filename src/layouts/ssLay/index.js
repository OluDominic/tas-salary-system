import React from 'react'
import AdminSideBar from '../../components/adminSideBar'
import EmployeeSidebar from '../../components/employeeSideBar'
import Footer from '../../components/footer'
import Header from '../../components/header'
import Home from '../../components/home'
import SideNav from '../../components/sideNav'
import Adminpage from '../../pages/AdminPage'

const SsLay =(props)=> {
    
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