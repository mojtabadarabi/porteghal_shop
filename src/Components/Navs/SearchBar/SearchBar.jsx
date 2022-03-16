import React from 'react'
import ChangeLanguage from '../../Reused/ChangeLanguage/ChangeLanguage'
import SubmitButton from '../../Reused/SubmitButton/SubmitButton'
import styles from './searchbar.module.css'

export default function SearchBar() {
  return (
    <div className={styles.container}>
      <div className={styles.searchcontainer}>
        <input type='text' placeholder='سرچ' />
      </div>
      <div className={styles.cancgecontainer}>
        <ChangeLanguage/>
      </div>
    </div>
  )
}
