import React from 'react'
import styles from './forminput.module.css'

export default function FormInput({type,value,onChange,placeholder,className}) {
    return (
        <input
            type={type} 
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={`${styles.input} ${className}`}
        />
    )
}
