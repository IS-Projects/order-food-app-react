import { useContext } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `${cartCtx.totalAmount.toFixed(2)}`;

  const hasItems = cartCtx.items.length > 0;

  // const mealsInCart = [{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }];
  return (
    <Modal onClick={props.onClose}>
      <ul className={classes["cart-items"]}>
        {cartCtx.items.map((meal) => {
          return (
            <CartItem
              key={meal.id}
              name={meal.name}
              amount={meal.amount}
              price={meal.price}
            />
          );
        })}
      </ul>
      <div className={classes.total}>
        {/* the video uses span for both things below */}
        <h3>Total Amount</h3>
        <p>{totalAmount}</p>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {/* <button className={classes.button} disabled={!hasItems}>
          Order
        </button> */}
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
