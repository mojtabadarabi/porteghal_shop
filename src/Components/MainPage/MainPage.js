import React from 'react'
import Discounts from '../Discounts/Discounts'
import TopNav from '../Navs/TopNav/TopNav'
import Slider from '../Slider/Slider'
import styles from './mainpage.module.css'
import AllProducts from '../AllProducts/AllProducts'
import PaymentMethods from '../PaymentMethods/PaymentMethods'
import Support from '../Support/Support'
import Reminders from '../Reminders/Reminders'
import Footer from '../Footer/Footer'

function MainPage() {
    return (
        <main className={styles.container}>
            <TopNav/>
            <Slider/>
            <Discounts/>
            <AllProducts/>
            <PaymentMethods/>
            <Support/>
            <Reminders/>
            <Footer/>
        </main>
    )
}

export default MainPage
