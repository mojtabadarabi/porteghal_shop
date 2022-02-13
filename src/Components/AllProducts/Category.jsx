import React, { useState, useEffect } from 'react'
import styles from "./products.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Category() {
    const [itemsshowslider, setitemsshowslider] = useState(8)
    const [categorySelected, setcategorySelected] = useState('all')
    const [categores, setcategores] = useState([])
    useEffect(() => {
        getAllCategories()
    }, [])
    const getAllCategories=async()=>{
        try {
            const data = await fetch('http://localhost:4000/api/categories',{
                method: 'get',
                headers: {
                  'Accept': 'application/json',
                  'Content-type': 'application/json',
                },
            })
            const {Categories} = await data.json()
            setcategores(Categories)
        } catch (error) {
            console.log(error)
        }
      }
    function handleClickOutside() {
        if(window.innerWidth<600){
            setitemsshowslider(2)
        }
        else if(window.innerWidth<850){
            setitemsshowslider(3)
        }
        else if(window.innerWidth<1150){
            setitemsshowslider(4)
        }
        else{
            setitemsshowslider(7)
        }
    }

    window.addEventListener("resize", handleClickOutside);

useEffect(() => {
    handleClickOutside()
}, [])
    function renderCategores() {
        return (
            categores.map((category,index)=>(
              <SwiperSlide key={index}>
                  <div
                   onClick={()=>setcategorySelected(category.title)} 
                   className={category?.title===categorySelected?styles.categoryselected:null}
                  >
                      {category.falabel}
                    </div>
              </SwiperSlide>
          )) 
        )
    }

    return (
        <div className={styles.categorycontainer}>
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
                    {renderCategores()}
                </Swiper>
        </div>
    )
}
