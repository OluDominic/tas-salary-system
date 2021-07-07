import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import { faArrowDown, faIcons, faTachometerAlt, faUser } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router-dom'
import Dropdown from './dropdown.js'
import { faArrowAltCircleDown } from '@fortawesome/free-regular-svg-icons'

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import NavigationIcon from '@material-ui/icons/Navigation';
import SettingsIcon from '@material-ui/icons/Settings';

const StyledMenu = withStyles({
    paper: {
      border: '1px solid #d3d4d5',
    },
  })((props) => (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      {...props}
    />
  ));
  
  const StyledMenuItem = withStyles((theme) => ({
    root: {
      '&:focus': {
        backgroundColor: theme.palette.primary.main,
        '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
          color: theme.palette.common.grey,
        },
      },
    },
  }))(MenuItem);


const Admin =()=> {

    const [openMenu, setOpenMenu] = useState(null);
    const history = useHistory();
    const [useData, setuseData] = useState({});
    
    useEffect(()=> {
        let userdata = localStorage.getItem('userdata');
        setuseData(JSON.parse(userdata))
    },[]);

    const handleClick = (event) => {
        setOpenMenu(event.currentTarget);
      };

    const handleClose = () => {
        setOpenMenu(null);
      };

    const logout=()=> {
        localStorage.clear();
        setuseData({});
        window.location.replace('http://192.168.43.9:3000/')
    }

    const settings=()=> {
      history.push('/settings')
  }

    return (
        <div className="admin-comp">
            <div className="admin-drop">
            {/*<Dropdown title="Select movie" items={items} />*/}
                <ul>
                    {/* <li>
                        <Link><FontAwesomeIcon icon={faUser} /> <span style={{marginLeft:"4px"}}> Users</span></Link>
                    </li> */}
                    {/* <li>
                        <Link> <FontAwesomeIcon icon={faTachometerAlt} /> </Link>
                    </li> */}
                </ul>
            </div>
            <span></span>
            <h2 onClick={handleClick} >Welcome, {useData.adminid} <span style={{marginLeft:"4px", display:'inline'}}><FontAwesomeIcon icon={faArrowDown} /></span>  </h2> 
            <StyledMenu
        id="customized-menu"
        anchorEl={openMenu}
        keepMounted
        open={Boolean(openMenu)}
        onClose={handleClose}
      >
          <StyledMenuItem onClick={settings}>
          <ListItemIcon>
            <SettingsIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </StyledMenuItem>
        <StyledMenuItem onClick={logout}>
          <ListItemIcon>
            <NavigationIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </StyledMenuItem>
          {/* <li style={{cursor: "pointer"}} onClick={logout}>
                        LogOut
                    </li> */}
      </StyledMenu>
           
        </div>
    );
}

export default Admin;