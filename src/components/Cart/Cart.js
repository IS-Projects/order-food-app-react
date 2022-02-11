import { useContext, useState } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const cartCtx = useContext(CartContext);

  const totalAmount = `${cartCtx.totalAmount.toFixed(2)}`;

  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const modalActions = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.onClose}>
        Close
      </button>
      {/* <button className={classes.button} disabled={!hasItems}>
          Order
        </button> */}
      {hasItems && (
        <button className={classes.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );
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
              onRemove={cartItemRemoveHandler.bind(null, meal.id)}
              onAdd={cartItemAddHandler.bind(null, meal)}
            />
          );
        })}
      </ul>
      <div className={classes.total}>
        {/* the video uses span for both things below */}
        <h3>Total Amount</h3>
        <p>{totalAmount}</p>
      </div>
      {isCheckout && <Checkout />}
      {!isCheckout && modalActions}
    </Modal>
  );
};

export default Cart;
