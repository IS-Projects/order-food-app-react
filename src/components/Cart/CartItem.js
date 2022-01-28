const CartItem = ({ name, price, quantity }) => {
  return (
    <div>
      <div>
        <h4>{name}</h4>
        <p>{price}</p>
        <p>x{quantity}</p>
      </div>
      <div>
        <button>+</button>
        <button>-</button>
      </div>
    </div>
  );
};

export default CartItem;
