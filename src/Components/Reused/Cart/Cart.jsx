import React from 'react'
import {FcLikePlaceholder} from 'react-icons/fc'
import {BsShareFill} from 'react-icons/bs'
import {AiFillStar} from 'react-icons/ai'
import { FaStar } from "react-icons/fa";
import styles from './cart.module.css'
import { useNavigate } from 'react-router';

function Cart({
    id,
    key,
    image,
    category,
    description,
    options,
    title,
    discount,
    discountedPrice,
    price,
    count,
}) {
    function addDecimalPoints(number) {
        var inputValue = String(number)
        
        var newValue = '';
        for (var i = 0; i < inputValue.length; i++) {
            if (i % 3 == 0&&i!==0) {
                newValue += ',';
            }
            newValue += inputValue[i];
        } 
        return newValue
    }
    const navigate = useNavigate()
    return (
        <div className={styles.cardcontainer}>
            <div className={styles.actionbtnscotainer}>
                <button className={styles.actioncard}><BsShareFill/></button>
                <button className={styles.actioncard}><FcLikePlaceholder/></button>
            </div>
            <div className={styles.cardimage} style={{backgroundImage: `url(${'http://192.168.1.5:4000'+'/'+'images/'+image[0]})`}}/>
            <h5>{title.substring(0,25)}</h5>
            
            <div  className={styles.pricecontainer}>
                <h5 className={discount&&styles.discountedporice}> {addDecimalPoints(price)} {'\u00A0'}تومان </h5>
                {discount&&(
                    <h5 className={styles.discount}>{addDecimalPoints(price-((discount*price)/100))} {'\u00A0'}تومان</h5>
                )}

            </div>
            
            <button onClick={()=>navigate(`/product/${id}`)} className={`${styles.actioncard} ${styles.addbtn}`}>افزودن به سبد خرید</button>
            
        </div>
    )
}

export default Cart
