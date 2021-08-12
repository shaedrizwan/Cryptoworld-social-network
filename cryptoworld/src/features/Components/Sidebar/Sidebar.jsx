import React from 'react'
import './Sidebar.css'

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar-profile">
                <img  style={{borderRadius:"50%",width:"75%"}} className="sidebar-profile-image" src="riz-pp.jpg" alt="profile"/>
                <div className="sidebar-profile-name">Shahid Rizwan</div>
                <div className="sidebar-profile-bio">Here to build a legacy and reinvent the social communication</div>
                <div className="sidebar-profile-email">shaedrizwan@gmail.com</div>
                <button className="profile-button">View Profile</button>
            </div>
        </div>
    )
}

export default Sidebar
