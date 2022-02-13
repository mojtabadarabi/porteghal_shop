import React from 'react'
import styles from './Reminders.module.css'
import {ReactComponent as NoticesVector} from '../../Assets/vector/notices.svg'

export default function Reminders() {
    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <div className={styles.infocontainer}>
                    <h2>
                        در جریان باشید
                    </h2>
                    <h5>
                        با ارسال ایمیل در جریان تخفیف ها باشید
                    </h5>
                    
                </div>
            </div>
            <div className={styles.headervectorcontainer}>
                <NoticesVector/>
            </div>
        </div>
    )
}
