import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import PublicLayout from "../Layout/Public/PublicLayout";
import styles from "./singleproduct.module.css";
import Rating from '@mui/material/Rating';
import {AiOutlineHeart} from 'react-icons/ai'
import {TiTick} from 'react-icons/ti'
import ProductImage from "./ProductImage";
import { useUserCardDispatcher } from "../../Providers/UserCart/UserCart";
import axios from 'axios'
import { useLang } from "../../Providers/LangProvider/LangProvider";

export default function SingleProduct() {
  const lang = useLang()
  const { id } = useParams();
  const [product, setproduct] = useState(null);
  const [error, seterror] = useState(null);
  const dispatch = useUserCardDispatcher()
  useEffect(() => {
    getSibngleProduct();
  }, []);
  const getSibngleProduct = async () => {
    try {
      const {data:{product}}= await axios.get(`http://localhost:4000/api/products/${id}`,{
        headers: {
          "lang":lang,
          "Content-type": "application/json",
        },
      })
      setproduct(product);
      seterror(null);
    } catch (error) {
      seterror("مشکلی پیش آمده است");
    }
  };
  const hendleAddToFavorites = async () => {
    try {
      const data = await fetch(`http://localhost:4000/api/product/${id}`, {
        method: "put",
        credentials: 'include',
        mode: 'no-cors',
        headers: {

          "Content-type": "application/json",
        },
      });
      const { product } = await data.json();
      setproduct(product);
      seterror(null);
    } catch (error) {
      console.log(error)
      seterror("مشکلی پیش آمده است");
    }
  };
  const renderComponent = () => {
    if (error !== null) {
      return <div>error</div>;
    } else if (error === null && product === null) {
      return <div>loading</div>;
    } else if (error === null && product !== null) {
      return (
        <div className={styles.productcontainer}>
          <div className={styles.imagecontainer}>
            <ProductImage images={product.imageUrl}/>
          </div>
          <div className={styles.infocontainer}>
            <div className={styles.titlecontainer}>
              {product.discountedPrice !== null ? (
                <div className={styles.discountedpricecontainer}>
                  <span>{product.discountedPrice}تومان</span>
                  <span>{product.price}تومان</span>
                </div>
              ) : (
                <div className={styles.discountedpricecontainer}>
                  <span>{product.price}تومان</span>
                </div>
              )}
              <h3>{product.title}</h3>
            </div>
            <div className={styles.ratingcontainer}>
              <Rating name="read-only" value={product.rates} readOnly />
              <span>{product.comments.length} </span>
              <span>نظر</span>
            </div>
            <div className={styles.optionscontainer}>
              {product.options.map((option) => (
                <span className={styles.option}><TiTick/>{option}</span>
              ))}
              {product.options.map((option) => (
                <span className={styles.option}><TiTick/>{option}</span>
              ))}
            </div>
            <div className={styles.descriptioncontainer}>
              <p>توضیحات </p>
              <p>
                {product.info}
              </p>
            </div>
            <span className={styles.categorylabel}>دسته بندی</span>
            <div className={styles.categorycontainer}>
              {product.category.map((category) => (
                <span className={styles.category}>{category.value}</span>
              ))}
              {product.category.map((category) => (
                <span className={styles.category}>{category.value}</span>
              ))}
            </div>
            <div className={styles.actionbuttons}>
                <button type='button' onClick={()=>dispatch({type:"ADD_PRODUCT",payload:product})}>
                  افزودن به سبد خرید
                </button>
                <button type='button' className={product.isfavorite?styles.favorite:null} onClick={hendleAddToFavorites}>
                  <AiOutlineHeart/>
                </button>
            </div>
          </div>
          
        </div>
      );
    }
  };

  return (
    <PublicLayout>
      <div className={styles.container}>{renderComponent()}</div>
    </PublicLayout>
  );
}
