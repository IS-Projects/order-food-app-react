import classes from "./MealItem.module.css";

const MealItem = ({ name, description, price }) => {
  const fixedPrice = price.toFixed(2);
  return (
    <div className={classes.meal}>
      <div>
        <h3>{name}</h3>
        {/* in tutorial, he uses div */}
        <p className={classes.description}>{description}</p>
        <p className={classes.price}>${fixedPrice}</p>
      </div>
    </div>
  );
};

export default MealItem;
