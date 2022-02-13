import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './button.module.css'


function NavButton({to,children,style,className}) {
    return (
        <NavLink to={to} >
            <button className={`${styles.navbtn} ${className}`} style={style}>
                {children}
            </button>
        </NavLink>
    )
}

export default NavButton
