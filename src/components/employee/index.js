import React, {useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import { faIcons, faTachometerAlt, faUser } from '@fortawesome/free-solid-svg-icons'
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


const Employee =()=> {

    const [useData, setuseData] = useState({});
    const [openMenu, setOpenMenu] = useState(null);
    const history = useHistory();

    const handleClick = (event) => {
        setOpenMenu(event.currentTarget);
      };

    const handleClose = () => {
        setOpenMenu(null);
      };
    
    useEffect(()=> {
        let userdata = localStorage.getItem('userdata');
        setuseData(JSON.parse(userdata))
    },[]);

    const logout=()=> {
        localStorage.clear();
        setuseData({});
        window.location.replace('http://localhost:3000/')
    }

    const recovery=(id)=> {
      history.push('/recovery/'+id)
  }

    
    return (
        <div className="employee-top">
            {/* <div className="employee-drop">
                <ul>
                    <li>
                        <Link><FontAwesomeIcon icon={faUser} /> <span style={{marginLeft:"4px"}}> Users</span></Link>
                    </li>
                    <li>
                        <Link> <FontAwesomeIcon icon={faTachometerAlt} /> </Link>
                    </li>
                    <li style={{cursor: "pointer"}} onClick={logout}>
                        LogOut
                    </li>
                </ul>
            </div> */}
            <h2 onClick={handleClick} style={{textTransform: "none", display: 'inline'}}> {useData.firstname}'s Profile <span style={{marginLeft:"4px"}}><FontAwesomeIcon icon={faUser} /></span>  </h2>
            <StyledMenu
                id="customized-menu"
                anchorEl={openMenu}
                keepMounted
                open={Boolean(openMenu)}
                onClose={handleClose}
            >
          <StyledMenuItem onClick={()=> {
            recovery(useData.id)
          }}>
            <ListItemIcon>
                <SettingsIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Reset Password" />
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

export default Employee