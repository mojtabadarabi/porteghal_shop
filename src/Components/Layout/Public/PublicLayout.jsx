import React from 'react'
import TopNav from '../../Navs/TopNav/TopNav'
import Footer from '../../Footer/Footer'
import SearchBar from '../../Navs/SearchBar/SearchBar'

export default function PublicLayout({children}) {
    return (
        <div>
            
            <TopNav/>
            <div style={{marginTop:'140px'}}>
                {children}
            </div>
            <Footer/>
        </div>
    )
}
