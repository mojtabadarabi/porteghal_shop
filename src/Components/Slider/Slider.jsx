import React from 'react'
import SubmitButton from '../Reused/SubmitButton/SubmitButton'
import styles from './slider.module.css'
import {ReactComponent as HeaderVector} from '../../Assets/vector/header.svg'
import { Navigate } from 'react-router'
import { NavLink } from 'react-router-dom'

function Slider() {
    return (
        <header className={styles.header}>
            <div className={styles.info}>
                <div className={styles.infocontainer}>
                    <h2>
                        بیش از یک میلیون کلا
                    </h2>
                    <h5>
                        آماده شو بریم خرید
                    </h5>
                    <div className={styles.actionscotainer}>
                        <NavLink to='/discounts' >
                            <button className={styles.button}>
                                تخفیف داری؟

                            </button>
                        </NavLink>
                        <NavLink to='/discounts' >
                            <button className={`${styles.button} ${styles.active} `}>
                            بزن بریم
                            </button>
                        </NavLink>
                    </div>
                </div>
            </div>
            <div className={styles.headervectorcontainer}>
                <HeaderVector/>
            </div>
        </header>
    )
}

export default Slider
