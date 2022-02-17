import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import PublicLayout from "../Layout/Public/PublicLayout";
import styles from "./singleproduct.module.css";
import Rating from '@mui/material/Rating';
import {AiOutlineHeart} from 'react-icons/ai'
import {TiTick} from 'react-icons/ti'
import ProductImage from "./ProductImage";

export default function SingleProduct() {
  const { id } = useParams();
  const [product, setproduct] = useState(null);
  const [error, seterror] = useState(null);
  useEffect(() => {
    getSibngleProduct();
  }, []);
  const getSibngleProduct = async () => {
    try {
      const data = await fetch(`http://localhost:4000/api/products/${id}`, {
        method: "get",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
      });
      const { product } = await data.json();
      setproduct(product);
      seterror(null);
    } catch (error) {
      console.log(error);
      seterror("مشکلی پیش آمده است");
    }
  };
  console.log(product);
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
              <h3>{product.title.falabel}</h3>
            </div>
            <div className={styles.ratingcontainer}>
              <Rating name="read-only" value={3} readOnly />
              <span>{15} </span>
              <span>نظر</span>
            </div>
            <div className={styles.optionscontainer}>
              {product.options.map((option) => (
                <span className={styles.option}><TiTick/>{option.falabel}</span>
              ))}
              {product.options.map((option) => (
                <span className={styles.option}><TiTick/>{option.falabel}</span>
              ))}
            </div>
            <div className={styles.descriptioncontainer}>
              <p>توضیحات </p>
              <p>
                {product.info.falabel}
              </p>
            </div>
            <span className={styles.categorylabel}>دسته بندی</span>
            <div className={styles.categorycontainer}>
              {product.category.map((category) => (
                <span className={styles.category}>{category.falabel}</span>
              ))}
              {product.category.map((category) => (
                <span className={styles.category}>{category.falabel}</span>
              ))}
            </div>
            <div className={styles.actionbuttons}>
                <button type='button' >
                  افزودن به سبد خرید
                </button>
                <button type='button' >
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
