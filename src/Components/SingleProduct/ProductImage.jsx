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
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className={styles.swiper}
      >
        <SwiperSlide className={styles.swiperslides}>
            <img
              src={'http://192.168.1.5:4000' + "/" + images}
            />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperslides}>
            <img
              src={'http://192.168.1.5:4000' + "/" + images}
            />
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}