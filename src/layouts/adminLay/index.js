import React, {useEffect, useState} from 'react'
import Admin from '../../components/admin'
import AdminSideBar from '../../components/adminSideBar'
import Footer from '../../components/footer'
import Header from '../../components/header'
import Home from '../../components/home'
import SideNav from '../../components/sideNav'
import Adminpage from '../../pages/AdminPage'
import { useHistory } from 'react-router-dom'
const AdminLayout =(props)=> {
     
  const [useData, setuseData] = useState(null);
  const history = useHistory()
    
  useEffect(()=> {
      let userdata =JSON.parse(localStorage.getItem('userdata'));
    //   setuseData(JSON.parse(userdata))
      console.log(userdata);
      if(userdata && userdata.usertype=='admin'){
        console.log('userdata');
      }else{
        console.log('userdata88888');
          history.push('/')
      }
  },[])
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
        </div>
    );
}

export default AdminLayout;