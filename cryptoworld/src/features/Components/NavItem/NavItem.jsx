import React from 'react'
import "./NavItem.css"

function NavItem({Icon,name}) {
    return (
        <div className="nav-item">
            {Icon && <Icon style={{fontSize:"large"}}/>}
            <div className="nav-title">{name}</div>
        </div>
    )
}

export default NavItem
