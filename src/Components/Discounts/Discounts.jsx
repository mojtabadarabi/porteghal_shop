import React, { useEffect, useState } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import customAxios from "../../Hooks/UseAxios";
import Cart from "../Reused/Cart/Cart";
import SpinnerLoading from "../SingleProduct/SpinnerLoading";
import styles from "./discount.module.css";

function Discounts() {
  const axios = customAxios();
  const [itemsshowslider, setitemsshowslider] = useState(3);
  const [discountProducts, setdiscountProducts] = useState([]);
  const [error, seterror] = useState(null);
  const [loading, setloading] = useState(false);
  useEffect(async () => {
      if(discountProducts.length===0){
          try {
            setloading(true);
            const { products } = await axios("discounts", "get");
            seterror(null)
            setdiscountProducts(products);
          } catch (error) {
            seterror('مشکلی پیش آمده است');
          } finally {
            setloading(false);
          }

      }
    handleClickOutside();
  }, []);
  function handleClickOutside() {
    if (window.innerWidth < 600) {
      setitemsshowslider(1);
    } else if (window.innerWidth < 850) {
      setitemsshowslider(2);
    } else if (window.innerWidth < 1150) {
      setitemsshowslider(3);
    } else {
      setitemsshowslider(4);
    }
  }

  window.addEventListener("resize", handleClickOutside);

    const renderProducts = ()=>{
      console.log('renderp====')
    if (loading) {
      return (
        <div>
          <SpinnerLoading />
        </div>
      );
    } else if (error !== null) {
      return <div>{error}</div>;
    }
    else if (
        loading===false &&
      error === null &&
      discountProducts &&
      discountProducts.length === 0
    ) {
      return <div>محصولی موجود نیست</div>;
    } else 
    if (
        loading===false &&
        error === null &&
        discountProducts &&
        discountProducts.length !== 0
      ) {
      return discountProducts.map((product, index) => (
        <SwiperSlide key={index}>
          <Cart
            id={product?._id}
            key={product?._id}
            image={product?.imageUrl}
            category={product?.category}
            description={product?.description}
            options={product?.options}
            title={product?.title}
            discount={product?.discount}
            discountedPrice={product?.discountedPrice}
            price={product?.price}
            count={product?.count}
          />
        </SwiperSlide>
      ));
    }
  }
  return (
    <section className={styles.discountcontainer}>
      <h1>از تخفیف چه خبر</h1>
      <div className={styles.discountslidercontainer}>
        <Swiper
          className={styles.discountslidercontainer}
          dir={"rtl"}
          spaceBetween={45}
          slidesPerView="auto"
          freeMode
          breakpoints={{}}
          slidesPerView={itemsshowslider}
          loop={true}
          onSwiper={(swiper) => {}}
          onSlideChange={(swiper) => {}}
        >
          {renderProducts()}
        </Swiper>
      </div>
    </section>
  );
}

export default Discounts;
