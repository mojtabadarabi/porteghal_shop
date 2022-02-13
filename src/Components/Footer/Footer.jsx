import React, { useEffect } from 'react'
import styles from './footer.module.css'
import NavButton from '../Reused/TopNavButtons/NavButton'
import {AiOutlineGoogle} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'
import {FaLinkedinIn} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'

export default function Footer(){

    return (
        <footer className={styles.footer}>
            <div className={styles.footersection}>
                <h2>خدمات مشتریان</h2>
                <NavButton to='/'>پاسخ به پرسش ها</NavButton>
                <NavButton to='/'>حریم خصوصی</NavButton>
                <NavButton to='/'>گزارش باگ</NavButton>
            </div>
            <div className={styles.footersection}>
                <h2>راهنمای خرید از فروشگاه</h2>
                <NavButton to='/'>نحوه ثبت سفارش</NavButton>
                <NavButton to='/'>رویه ارسال سفارش</NavButton>
                <NavButton to='/'>شیوه های پرداخت</NavButton>
            </div>
            <div className={styles.footersection}>
                <h2>با ما همراه باشید</h2>
                <div className={styles.socialmedia}>
                    <NavButton to='/'><AiOutlineGoogle/></NavButton>
                    <NavButton to='/'><BsInstagram/></NavButton>
                    <NavButton to='/'><FaLinkedinIn/></NavButton>
                    <NavButton to='/'><BsTwitter/></NavButton>

                </div>
            </div>
        </footer>
    )
}
