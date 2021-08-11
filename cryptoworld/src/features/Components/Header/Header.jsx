import React from 'react'
import { Logo } from '../Logo/Logo'
import "./Header.css"
import NavItem from '../NavItem/NavItem'
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import NotificationsIcon from '@material-ui/icons/Notifications';

function Header() {


    return (
        <div className="header">
            <div className="header-left">
                <Logo className="logo"/>
            </div>
            <div className="header-right">
                <NavItem Icon={HomeIcon} name="Home"/>
                <NavItem Icon={NotificationsIcon} name="Notifications"/>
                <NavItem Icon={AccountCircleIcon} name="Profile"/>
                <NavItem Icon={LockOpenIcon} name="Login"/>
                <NavItem Icon={LockOpenIcon} name="Signup"/>
            </div>
            {/* navitems */}
        </div>
    )
}

export default Header
