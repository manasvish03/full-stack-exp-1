import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const ProductList = () => {
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();

  return (
    <>
      <h1 className="page-title">Products</h1>
      <p className="muted">Browse items and add them to cart</p>

      <div className="product-grid">
        {products.map(p => (
          <div key={p.id} className="product-card">
            <h3>{p.name}</h3>
            <p className="price">₹{p.price}</p>

            {/* THIS IS THE BUTTON */}
            <button
              className="primary"
              onClick={() => dispatch(addToCart(p))}
            >
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductList;
