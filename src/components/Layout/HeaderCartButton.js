import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const ctx = useContext(CartContext);
  const [buttonAnimation, setButtonAnimation] = useState(false);
  const { items } = ctx;
  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${buttonAnimation ? classes.bump : ""}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setButtonAnimation(true);
    const timer = setTimeout(() => {
      setButtonAnimation(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
