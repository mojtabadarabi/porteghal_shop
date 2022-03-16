import React from 'react'
import styles from './usercard.module.css'
import {CgMathPlus} from 'react-icons/cg'
import {CgMathMinus} from 'react-icons/cg'
import { useUserCard, useUserCardDispatcher } from '../../../Providers/UserCart/UserCart'

export default function ProductCard({product}) {
    const dispatch = useUserCardDispatcher()
    const decrementCount=(product)=>{
        dispatch({type:'DECREMENT_COUNT',payload:product})
    }
    const incrementCount=(product)=>{
        dispatch({type:'INCREMENT_COUNT',payload:product})
    }
    return (
        <div className={styles.cardRow}>
            <div className={`${styles.cell} ${styles.image}`}>
                    <img
                    src={'http://localhost:4000' + "/images/" + product.imageUrl[0]}
                  />
            </div>
            <div className={`${styles.cell} ${styles.info}`}>
                <div>موبایل سامسونگ</div>
                <div className={styles.countontainer}>
                    <button onClick={()=>incrementCount(product)} className={`${styles.iconbutton} ${styles.button}`}><CgMathPlus/></button>
                    <span>{product.cardCount}</span>
                    <button onClick={()=>decrementCount(product)} className={`${styles.iconbutton} ${styles.button}`}><CgMathMinus/></button>
                </div>
                
            </div>
            <div className={`${styles.cell} ${styles.price}`}>
                {product.price*product.cardCount} تومان
            </div>
        </div>
    )
}
