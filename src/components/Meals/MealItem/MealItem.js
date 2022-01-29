import { useContext } from "react";
import CartContext from "../../../store/cart-context";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = ({ name, description, price, id }) => {
  const fixedPrice = price.toFixed(2);
  const cartCtx = useContext(CartContext);
  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: id,
      name: name,
      amount: amount,
      price: price,
    });
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        {/* in tutorial, he uses div */}
        <p className={classes.description}>{description}</p>
        <p className={classes.price}>${fixedPrice}</p>
      </div>
      <div>
        <MealItemForm id={id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
