import React, {useCallback, useEffect, useRef, useState} from 'react'
import Admin from '../../components/admin'
import AdminSideBar from '../../components/adminSideBar'
import Footer from '../../components/footer'
import Header from '../../components/header'
import Home from '../../components/home'
import SideNav from '../../components/sideNav'
import Adminpage from '../../pages/AdminPage'
import { useHistory } from 'react-router-dom'
import {APPCONFIG} from './../../config/config'
import moment from 'moment';
const AdminLayout =(props)=> {
     
  const [useData, setuseData] = useState(null);
  const [events, setEvents] = useState(['click', 'load', 'scroll', "keydown"]);
  const [second, setSecond] = useState(0);
  const history = useHistory()
  //const isAuthenticated = [{APPCONFIG.appapi}];

  let timeStamp;
  let warningInactiveInterval = useRef();
  let startTimerInterval = useRef();

  
  let timeChecker=()=> {
    startTimerInterval.current = setTimeout(()=> {
      let storedTimeStamp = sessionStorage.getItem('lastTimeStamp');
      warningInactive(storedTimeStamp);
    }, 60000);
  };

  let warningInactive = (timeString) => {
    clearTimeout(startTimerInterval.current);

    warningInactiveInterval.current = setInterval(()=> {
      const maxTime = 2;
      const popTime = 1;

      const diff = moment.duration(moment().diff(moment(timeString)));
      const minPast = diff.minutes();
      const leftSecond = 60 - diff.seconds();

      if (minPast === popTime) {
        setSecond(leftSecond);
      }

      if (minPast === maxTime) {
        clearInterval(warningInactiveInterval.current);
        sessionStorage.removeItem('lastTimeStamp');
      }

    }, 1000);
  }

  let resetTimer = useCallback(()=> {
    clearTimeout(startTimerInterval.current);
    clearInterval(warningInactiveInterval.current)


    if(APPCONFIG.appapi) {
      timeStamp = moment();
      sessionStorage.setItem('lastTimeStamp', timeStamp);
    } else {
      sessionStorage.removeItem('lastTimeStamp');
    }

    timeChecker();
  }, [APPCONFIG.appapi]);

  useEffect(()=> {
    events.forEach((event)=> {
      window.addEventListener(event, resetTimer);
    });
    timeChecker();

    return ()=> {
      clearTimeout(startTimerInterval.current)
    }
  }, [resetTimer, events, timeChecker]);

    
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
  },[]);
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