import React from 'react'
import TopNav from '../../Navs/TopNav/TopNav'
import Footer from '../../Footer/Footer'

export default function PublicLayout({children}) {
    return (
        <div>
            <TopNav/>
            <div style={{marginTop:'75px'}}>
                {children}
            </div>
            <Footer/>
        </div>
    )
}
