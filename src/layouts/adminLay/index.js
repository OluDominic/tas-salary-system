import React, { useEffect } from 'react'
import AdminSideBar from '../../components/adminSideBar'
import SideNav from '../../components/sideNav'
import {APPCONFIG} from './../../config/config'

const events = [
  "load",
  "mousemove",
  "mousedown",
  "click",
  "scroll",
  "keypress"
];


const AdminLayout =(props)=> {

  let timer;

  const handleLogoutTimer =()=> {
    timer = setTimeout(() => {
      
      resetTimer();

      Object.values(events).forEach((item)=> {
        window.removeEventListener(item, resetTimer);
      });

      logoutAction();
    }, 3600000);
  }

  const resetTimer =()=> {
    if(timer) clearTimeout(timer);
  }

  useEffect(()=> {
    Object.values(events).forEach((item)=> {
      window.addEventListener(item, ()=> {
        resetTimer();
        handleLogoutTimer()
      })
    })
  }, []);

  const logoutAction =()=> {
    localStorage.clear();
    window.location.pathname = `${APPCONFIG.appapi}/login`
  }

  // useEffect(()=> {
  //     let userdata =JSON.parse(localStorage.getItem('userdata'));
  //   //   setuseData(JSON.parse(userdata))
  //     console.log(userdata);
  //     if(userdata && userdata.usertype=='admin'){
  //       console.log('userdata');
  //     }else{
  //       console.log('userdata88888');
  //         history.push('/')
  //     }
  // },[]);
  
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