import { useEffect, useState } from "react";
import useHttp from "../../hooks/use-Http";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const { isLoading, error, sendRequest: fetchMeals } = useHttp();

  const mealsUrl =
    "https://order-food-1eed3-default-rtdb.firebaseio.com/meals.json";

  useEffect(() => {
    const formatMeals = (mealsObj) => {
      console.log(mealsObj);
      const mealsArray = Object.entries(mealsObj).map(([key, value]) => ({
        id: key,
        name: value.name,
        description: value.description,
        price: value.price,
      }));
      console.log(mealsArray);
      setMeals(mealsArray);
    };

    fetchMeals({ url: mealsUrl }, formatMeals);
  }, [fetchMeals]);
  return (
    <section className={classes.meals}>
      {isLoading && (
        <p className={classes.MealsLoading}>Meals are loading ... </p>
      )}
      {error && <p className={classes.MealsError}>{error}</p>}

      {meals.length !== 0 && (
        <Card>
          <ul>
            {meals.map((meal) => (
              <MealItem
                key={meal.id}
                id={meal.id}
                name={meal.name}
                description={meal.description}
                price={meal.price}
              />
            ))}
          </ul>
        </Card>
      )}
    </section>
  );
};

export default AvailableMeals;
