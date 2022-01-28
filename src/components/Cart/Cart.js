import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const mealsInCart = [{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }];
  return (
    <Modal>
      <ul className={classes["cart-items"]}>
        {mealsInCart.map((meal) => {
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
        <p>88.99</p>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.close}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
