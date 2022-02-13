import React from 'react'
import styles from './support.module.css'
import {ReactComponent as SopportVector} from '../../Assets/vector/support.svg'

export default function Support() {
    return (
        <div className={styles.container}>
            <div className={styles.headervectorcontainer}>
                <SopportVector/>
            </div>
            <div className={styles.info}>
                <div className={styles.infocontainer}>
                    <h2>
                        پشتیبانی 24 ساعته
                    </h2>
                    <h5>
                        مشاوران ما آماده خدمت رسانی هستند
                    </h5>
                    
                </div>
            </div>
        </div>
    )
}
