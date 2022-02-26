import React, { useEffect, useState } from "react";
import { fetchAllProduct } from "../Discounts/apiCals";
import Cart from "../Reused/Cart/Cart";
import styles from "./products.module.css";
import Category from "./Category";
import { useLang } from "../../Providers/LangProvider/LangProvider";

export default function AllProducts() {
  const lang = useLang()
  const [products, setproducts] = useState(null);
  useEffect(() => {
    getAllCategories();
  }, []);
  const getAllCategories = async () => {
    try {
      const data = await fetch("http://localhost:4000/api/products", {
        method: "get",
        headers: {
          lang:lang,
          Accept: "application/json",
          "Content-type": "application/json",
        },
      });
      const {products} = await data.json();
      setproducts(products)
    } catch (error) {
      console.log(error);
    }
  };
  const renderProducts = () => {
    if (products === null) {
      return <div>Loading...</div>;
    } else if (products !== null && products.length === 0) {
      return <div>Empty</div>;
    } else if (products !== null && products.length !== 0) {
      return (
        <div className={styles.productscontainer}>
          {products.map((product, index) => (
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
          ))}
        </div>
      );
    }
  };

  return (
    <div className={styles.container}>
      <h3>محصولات</h3>
      <Category />
      {renderProducts()}
    </div>
  );
}
