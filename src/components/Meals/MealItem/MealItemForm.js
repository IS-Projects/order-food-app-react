import classes from "./MealItemForm.module.css";

const MealItemForm = () => {
  return (
    <form style={classes.form}>
      <label htmlFor="amount">Amount</label>
      <input id="amount" type="number" />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
