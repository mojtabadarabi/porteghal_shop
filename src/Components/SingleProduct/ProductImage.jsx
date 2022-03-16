import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import styles from "./swiper.module.css";

// import required modules
import { EffectCards } from "swiper";

export default function ProductImage({images}) {
  console.log(images)
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className={styles.swiper}
      >
        
        {
          images.map(image=>(
              <SwiperSlide className={styles.swiperslides}>
                  <img
                    src={'http://localhost:4000' + "/images/" + image}
                  />
              </SwiperSlide>

          ))
        }
        
      </Swiper>
    </>
  );
}