import React, { useEffect, useRef, useState } from 'react'
import styles from './change.module.css'
import {ReactComponent as IR} from '../../../Assets/flasgs/ir.svg'
import {ReactComponent as EN} from '../../../Assets/flasgs/us.svg'
import {ReactComponent as AR} from '../../../Assets/flasgs/ar.svg'
import { setLang, useLang, useLanguage } from '../../../Providers/LangProvider/LangProvider'
import { languaegs } from './data'



export default function ChangeLanguage() {
    const listRef = useRef(null)
    const containerRef = useRef(null)
    const setLanguage= setLang()
    const lang = useLang()
    const {dir} = useLanguage()
    const {
        persianTitle,
        englishtitle,
        arabicTitle,
        icon,
        value,
        title
    }=languaegs[lang]

    useEffect(()=>{
        document.addEventListener('mousedown',handleClickOutSide)
    },[])
    const handleClickOutSide=(event)=>{
        if (
            containerRef &&
            !containerRef.current.contains(event.target)
        ) {
            handleCloseList();
        }
    }
    const handleOpenList=()=>{
        listRef.current.classList.toggle(styles.showList)
    }
    const handleCloseList=()=>{
        listRef.current.classList.remove(styles.showList)
    }
    const handleChangeLanguage=(value)=>{
        setLanguage(value)
    }
    console.log(lang)
  return (
    <div className={styles.container} ref={containerRef}>
        <div className={styles.svgcontainer} onClick={handleOpenList}>
            {icon}
            {title} 
        </div>
        <div className={`${styles.flagscontainer} ${dir==='rtl'?styles.rtl:styles.ltr}`} ref={listRef}>
            <div className={`${styles.svgcontainer} ${lang==='fa'&&styles.active}`} onClick={()=>handleChangeLanguage('fa')} >
                <IR/>
                {persianTitle}
            </div>
            <div className={`${styles.svgcontainer} ${lang==='en'&&styles.active}`} onClick={()=>handleChangeLanguage('en')}>
                <EN/>
                {englishtitle}
            </div>
            {/* <div className={`${styles.svgcontainer} ${lang==='ar'&&styles.active}`} onClick={()=>handleChangeLanguage('ar')} >
                <AR/>
                عربی
            </div> */}
        </div>
    </div>
  )
}
