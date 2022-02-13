import React, { useEffect, useRef, useState } from 'react'
import NavButton from '../../Reused/TopNavButtons/NavButton'
import SubmitButton from '../../Reused/SubmitButton/SubmitButton'
import {ReactComponent as Logo} from '../../../Assets/icons/logo.svg'
import {ReactComponent as Cart} from '../../../Assets/icons/cart.svg'
import styles from './topnav.module.css'
import {AiOutlineClose} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import { useLanguage } from '../../../Providers/LangProvider/LangProvider'
import { Link } from 'react-router-dom'
import AccountMenu from '../../Menus/AccountMenu/AccountMenu'

function TopNav() {
    const burgerRef = useRef(null)
    const menuRef = useRef(null)
    const overlayRef = useRef(null)
    const {dir,title,topnav:{
        homelabel,
        productslabel,
        stores,
        payment,
        loginlabel,
    }} = useLanguage()
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const user = JSON.parse(localStorage.getItem('user'))
    useEffect(() => {
        burgerRef.current.addEventListener('click',openMenu)
        document.addEventListener('mousedown',handleClickOutSide)
        return ()=>{
            document.removeEventListener('mousedown',handleClickOutSide)
        }
    }, [])
    const handleClickOutSide=(event)=>{
        if (
            menuRef &&
            !menuRef.current.contains(event.target)
        ) {
            closeMenu();
        }
    }
    const closeMenu=()=>{
        menuRef.current.classList.remove(styles.active)
        overlayRef.current.classList.remove(styles.active)
    }
    const openMenu=()=>{
        menuRef.current.classList.add(styles.active)
        overlayRef.current.classList.add(styles.active)
    }
    return (
        <nav className={styles.nav}>
            <div  className={styles.menucontainer}>
                <div className={styles.logocontainer}>
                    <Link to='/'>
                        <Logo/>

                    </Link>
                </div>
                <div ref={burgerRef}className={styles.burgermenu}>
                    <div className={styles.burger}></div>
                    <div className={styles.burger}></div>
                    <div className={styles.burger}></div>
                </div>
                <div className={`${styles.overlay} ${dir==='ltr'&&styles.ltr}`} ref={overlayRef}></div>
                <div className={` ${styles.menu} ${dir==='ltr'&&styles.ltr}`} ref={menuRef}>
                    <div className={styles.closebtncontainer}>
                        <Logo/>
                        <h4>{title}</h4>
                        <button className={styles.closebtn} onClick={closeMenu}>
                            <AiOutlineClose/>
                        </button>
                    </div>
                    <NavButton to='/'>{homelabel}</NavButton>
                    <NavButton to='/'>{productslabel}</NavButton>
                    <NavButton to='/'>{stores}</NavButton>
                    <NavButton to='/'>{payment}</NavButton>
                    
                </div>
            </div>

                <div className={styles.actionscontainer}>
                    <NavButton to='/cart' style={{padding:'6px 0'}}>
                        <span className={styles.cartcontainer}>
                            <Cart/> 
                        </span>
                    </NavButton>
                    {
                        user!==null?(
                            <button onClick={handleClick} type='button' className={styles.accountbutton}>
                                <AiOutlineUser/>
                            </button>
                        ):(
                            <NavButton to='/signup' style={{padding:'6px 0'}} className={styles.loginbtn}>
                                {loginlabel}
                            </NavButton>

                        )
                    }
                    <AccountMenu 
                        open={open} 
                        handleClose={handleClose}
                        anchorEl={anchorEl}
                    />
            </div>
        </nav>
    )
}

export default TopNav
