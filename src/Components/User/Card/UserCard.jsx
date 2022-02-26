import Menu from "@mui/material/Menu";
import ProductCard from "./ProductCard";
import styles from "./usercard.module.css";
import { useState, useEffect } from "react";
import {
  useUserCard,
  useUserCardDispatcher,
} from "../../../Providers/UserCart/UserCart";

export default function UserCard({ anchorEl, open, handleClose }) {
  const [menuwidth, setmenuwidth] = useState();
  const products = useUserCard();
  useEffect(() => {
    checkWidth();
  }, [window.innerWidth]);
  const checkWidth = () => {
    if (window.innerWidth > 700) {
      setmenuwidth(500);
    } else if (window.innerWidth > 500) {
      setmenuwidth(400);
    } else {
      setmenuwidth(250);
    }
  };
  return (
    <Menu
      dir="rtl"
      anchorEl={anchorEl}
      id="account-menu"
      open={open}
      onClose={handleClose}
      // onClick={handleClose}
      PaperProps={{
        elevation: 0,
        sx: {
          width: `${menuwidth}px`,
          background: "#ddd",
          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
          mt: 1.5,
          //   ml:5,
          "& .MuiAvatar-root": {
            width: 32,
            height: 32,
            ml: 1.25,
          },
          "&:before": {
            content: '""',
            display: "block",
            position: "absolute",
            top: 0,
            left: 55,
            width: 10,
            height: 10,
            bgcolor: "#ddd",
            transform: "translateY(-50%) rotate(45deg)",
            zIndex: 0,
          },
        },
      }}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
    >
      <div className={styles.rowcontainer}>
        {products.length!==0?products.map((product,index) => (
          <div className={styles.row}>
            <ProductCard key={index} product={product} />
          </div>
        )):(
          <div className={styles.row} style={{textAlign:'center'}}>
           <span >محصولی در سبد خرید شما نیست</span>
          </div>
        )
      }
      </div>
      {
        products.length!==0?(
          <button
            type="button"
            className={`${styles.paymentbutton} ${styles.button}`}
          >
            تسویه حساب
          </button>
        ):null
      }
    </Menu>
  );
}
