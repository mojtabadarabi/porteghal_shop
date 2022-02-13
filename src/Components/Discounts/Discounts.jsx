import React, { useEffect, useRef, useState } from 'react'
import styles from './discount.module.css'
import shoe1 from '../../Assets/products/shoes1.jpg'
import product1 from '../../Assets/products/product(1).jpg'
import product2 from '../../Assets/products/product(2).jpg'
import product3 from '../../Assets/products/product(3).jpg'
import product4 from '../../Assets/products/product(4).jpg'
import product5 from '../../Assets/products/product(5).jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Cart from '../Reused/Cart/Cart'
import { fetchAllProduct } from './apiCals'

function Discounts() {
    const [itemsshowslider, setitemsshowslider] = useState(3)
    const [discountProducts, setdiscountProducts] = useState([])
    function handleClickOutside() {
        if(window.innerWidth<600){
            setitemsshowslider(1)
        }
        else if(window.innerWidth<850){
            setitemsshowslider(2)
        }
        else if(window.innerWidth<1150){
            setitemsshowslider(3)
        }
        else{
            setitemsshowslider(4)
        }
    }

    window.addEventListener("resize", handleClickOutside);

useEffect(async() => {
    // const res=await fetchAllProduct()
    // setdiscountProducts(res)
    handleClickOutside()
}, [])
    function renderProducts() {
        return (
            
                discountProducts&&discountProducts.length!==0?(
                    discountProducts.map((product,index)=>(
                        <SwiperSlide key={index}>
                            <Cart 
                              id={product.id}
                              key={product.id}
                              image={product.image}
                              title={product.title}
                              discount={product?.discount}
                              price={product.price}
                            />
                        </SwiperSlide>
                    )) 

                ):null
            
        )
    }
    return (
        <section className={styles.discountcontainer}>
            <h1>از تخفیف چه خبر</h1>
            <div className={styles.discountslidercontainer} >
                <Swiper
                className={styles.discountslidercontainer}
                dir={'rtl'} 
                spaceBetween={45}
                slidesPerView='auto'
                freeMode
                breakpoints={{}}
                slidesPerView={itemsshowslider}
                loop={true}
                onSwiper={(swiper) => {
                }}  
                onSlideChange={(swiper) => {
                }}
                >
                    {renderProducts()}
                </Swiper>

            </div>
        </section>
    )
}

export default Discounts
