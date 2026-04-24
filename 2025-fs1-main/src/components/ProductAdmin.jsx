import { useDispatch } from "react-redux";
import { addProduct } from "../redux/productsSlice";

const ProductAdmin = () => {
  const dispatch = useDispatch();

  return (
    <div className="admin-box">
      <h3>Admin Tools</h3>
      <p className="muted">Manage products</p>

      {/* ADMIN BUTTON */}
      <button
        className="primary"
        onClick={() =>
          dispatch(addProduct({
            id: Date.now(),
            name: "New Product",
            price: 1200
          }))
        }
      >
        + Add Product
      </button>
    </div>
  );
};

export default ProductAdmin;
