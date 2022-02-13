import React from 'react'
import styles from './formbutton.module.css'

export default function FormButton({className,title}) {
    return (
        <button 
            type='submit'
            className={`${styles.button} ${className}`}
        >
            {title}
        </button >
    )
}
