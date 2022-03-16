import React, { useState, useEffect } from 'react'
import styles from "./products.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useLang } from '../../Providers/LangProvider/LangProvider';
import customAxios from '../../Hooks/UseAxios'

export default function Category() {
    const axios = customAxios()
    const lang = useLang()
    const [itemsshowslider, setitemsshowslider] = useState(8)
    const [categorySelected, setcategorySelected] = useState('all')
    const [categores, setcategores] = useState([])
    useEffect(() => {
        getAllCategories()
    }, [])
    const getAllCategories=async()=>{
        try {
            const {Categories} = await axios('categories','get')
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
                      {category.value}
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
