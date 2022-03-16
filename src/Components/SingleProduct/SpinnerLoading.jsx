import React from 'react'
import styles from './spinner.module.css'
import { Audio } from  'react-loader-spinner'

export default function SpinnerLoading() {
    return (
        <div className={styles.spinnercontainer}>
            <div className={styles.spinner}>
                <Audio
                    height="100"
                    width="100"
                    color='rgb(255, 125, 0)'
                    ariaLabel='loading'
                />
                <h6>لطفا صبر کنید</h6>

            </div>
        </div>
    )
}
