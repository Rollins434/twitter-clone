
import { Button } from '@material-ui/core';
import { Bookmark, Home, ListAlt, MailOutlineOutlined, MoreHoriz, NotificationsNone, PermIdentity, Search, Twitter } from '@material-ui/icons'
import React from 'react'
import './Sidebar.css'
import Sidebaroptions from './SidebarOptions';

 function Sidebar() {
    

    return (
        <div className="sidebar">
            {/* twitter icon */}
            <Twitter className="sidebar__twittericon"/>

            {/* sidebar options */}
            <Sidebaroptions active Icon={Home} text="Home" />
            <Sidebaroptions Icon={Search} text="Explore"/>
            <Sidebaroptions Icon={NotificationsNone} text="Notifications"/>
            <Sidebaroptions Icon={MailOutlineOutlined}    text="Messages"/>
            <Sidebaroptions Icon={Bookmark}    text="BookMark"/>
            <Sidebaroptions Icon={ListAlt}   text="List"/>
            <Sidebaroptions Icon={PermIdentity}    text="Profile"/>
            <Sidebaroptions Icon={MoreHoriz}    text="More"/>

            {/* button tweeet */}
            <Button variant="outlined" className="sidebar--button" fullWidth >Tweet </Button>
        </div>
    )
}

export default Sidebar;