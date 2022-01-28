import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = () => {
  return (
    <form className={classes.form}>
      <Input label="Amount" id="amount" type="number" />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
