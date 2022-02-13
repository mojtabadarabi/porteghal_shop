import React from 'react'
import styles from './submit.module.css'

function SubmitButton({children,bgColor,onClick,classes,txtColor,style}) {
    return (
        <button 
        
        onClick={onClick} 
        style={{backgroundColor:`${bgColor}`,color:`${txtColor}`,...style}} 
        className={`${styles.submitbutton} ${styles.classes}`}
        >
            {children}
        </button>
    )
}

export default SubmitButton
