import { useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const total = cart.reduce((s, i) => s + i.price, 0);

  return (
    <div className="cart-box">
      <h3>Your Cart</h3>

      {cart.length === 0 && (
        <p className="muted">No items added</p>
      )}

      {cart.map(item => (
        <div key={item.id} className="cart-item">
          <span>{item.name}</span>
          <span>₹{item.price}</span>
        </div>
      ))}

      {cart.length > 0 && (
        <div className="cart-total">
          Total: ₹{total}
        </div>
      )}
    </div>
  );
};

export default Cart;
