import CartItem from "./CartItem";

const Cart = ({ mealsInCart }) => {
  return (
    <div>
      <ul>
        {mealsInCart.map((meal) => {
          return <CartItem />;
        })}
      </ul>
      <div>
        <h3>Total Amount</h3>
        <p>88.99</p>
      </div>
    </div>
  );
};

export default Cart;
