import React from 'react'
import AdminSideBar from '../../components/adminSideBar'
import Footer from '../../components/footer'
import Header from '../../components/header'
import Home from '../../components/home'
import SideNav from '../../components/sideNav'
import Adminpage from '../../pages/AdminPage'

const AdminLayout =(props)=> {
    
    return (
        <div style={{background: "white"}}  className="adminLay">
            
            <div className="controlPanel">
                <div className="sidebar">
                    <SideNav>
                        <AdminSideBar />
                    </SideNav>
                </div>
                <div className="content">
                    {props.children}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default AdminLayout;