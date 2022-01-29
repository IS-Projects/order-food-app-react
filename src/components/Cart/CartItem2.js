const CartItem = ({ name, price, amount }) => {
  return (
    <li>
      <div>
        <h4>{name}</h4>
        <p>{price}</p>
        <p>x{amount}</p>
      </div>
      <div>
        <button>+</button>
        <button>-</button>
      </div>
    </li>
  );
};

export default CartItem;
