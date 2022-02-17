import React from 'react'
import styles from './usercard.module.css'
import {CgMathPlus} from 'react-icons/cg'
import {CgMathMinus} from 'react-icons/cg'

export default function ProductCard() {
    return (
        <div className={styles.cardRow}>
            <div className={`${styles.cell} ${styles.image}`}>image</div>
            <div className={`${styles.cell} ${styles.info}`}>
                <div>موبایل سامسونگ</div>
                <div className={styles.countontainer}>
                    <button className={`${styles.iconbutton} ${styles.button}`}><CgMathPlus/></button>
                    <span>5</span>
                    <button className={`${styles.iconbutton} ${styles.button}`}><CgMathMinus/></button>
                </div>
                
            </div>
            <div className={`${styles.cell} ${styles.price}`}>
                20000 تومان
            </div>
        </div>
    )
}
