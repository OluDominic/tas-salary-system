import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import EmployeeSidebar from '../../components/employeeSideBar'
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

const SsLay =(props)=> {
    const history = useHistory()

    let timer;

  const handleLogoutTimer =()=> {
    timer = setTimeout(() => {
      
      resetTimer();

      Object.values(events).forEach((item)=> {
        window.removeEventListener(item, resetTimer);
      });

      logoutAction();
    }, 1800000);
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

    useEffect(()=> {
        let usedata = JSON.parse(localStorage.getItem('userdata'))

        if(usedata && usedata.usertype =='employee') {
           // console.log('userdata')
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