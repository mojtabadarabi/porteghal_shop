import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import PublicLayout from "../Layout/Public/PublicLayout";
import styles from "./singleproduct.module.css";

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
            <img
              src={process.env.REACT_APP_BASE_URL + "/" + product.imageUrl}
            />
          </div>
          <div className={styles.infocontainer}>
              <h4>
              {product.title.falabel}

              </h4>
              {
                  product.description.map(desc=>(
                      <div className={styles.descriptioncontainer}>
                          {desc.falabel}
                      </div>
                  ))
              }
              <hr/>
            <span className={styles.categorylabel}>دسته بندی</span>
              <div className={styles.categorycontainer}>
                {
                    product.category.map(category=>(
                        <span className={styles.category}>
                            {category.falabel}
                        </span>
                    ))
                }

              </div>
          </div>
          <div className={styles.paymentcontainer}>
            <div className={styles.optionscontainer}>
                {
                    product.options.map(option=>(
                        <span className={styles.option}>
                            {option.falabel}
                        </span>
                    ))
                }

              </div>
              <button className={`${styles.actioncard} ${styles.addbtn}`}>خرید نهایی</button>
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
