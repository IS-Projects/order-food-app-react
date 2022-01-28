const CartItem = ({ name, price, quantity }) => {
  return (
    <div>
      <h4>{name}</h4>
      <p>{price}</p>
      <p>x{quantity}</p>
    </div>
  );
};

export default CartItem;
