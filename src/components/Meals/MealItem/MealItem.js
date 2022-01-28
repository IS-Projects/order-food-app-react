import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = ({ name, description, price, id }) => {
  const fixedPrice = price.toFixed(2);
  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        {/* in tutorial, he uses div */}
        <p className={classes.description}>{description}</p>
        <p className={classes.price}>${fixedPrice}</p>
      </div>
      <div>
        <MealItemForm id={id} />
      </div>
    </li>
  );
};

export default MealItem;
