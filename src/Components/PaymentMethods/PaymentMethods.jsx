import React from 'react'
import styles from './payment.module.css'
import {ReactComponent as OnlinePayment} from '../../Assets/vector/onlinepayment.svg'
import {ReactComponent as GhestyPayment} from '../../Assets/vector/ghpayment.svg'
import {ReactComponent as DirectPayment} from '../../Assets/vector/directpayment.svg'

export default function PaymentMethods() {
    
    return (
        <div className={styles.container}>
            <div className={styles.method}>  
                <OnlinePayment/>
                پرداخت آنلاین
            </div>
            <div className={styles.method}>
                <DirectPayment/>
                پرداخت درب منزل
            </div>
            <div className={styles.method}>
                <GhestyPayment/>
                پرداخت اقساطی
            </div>
        </div>
    )
}
