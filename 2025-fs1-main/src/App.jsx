import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Login from "./components/Login";
import ProductList from "./components/ProductList";
import ProductAdmin from "./components/ProductAdmin";
import Cart from "./components/Cart";

function App() {
  const { isLoggedIn, userName, role, logout } =
    useContext(AuthContext);

  if (!isLoggedIn) return <Login />;

  return (
    <div className="app">
      {/* SIDEBAR */}
      <aside className="sidebar">
        <h1 className="logo">⚡ ShopX</h1>

        <button className="side-btn active">🔥 Products</button>
        <button className="side-btn">🛒 Cart</button>
        {role === "admin" && (
          <button className="side-btn admin">👑 Admin</button>
        )}

        <div className="side-footer">
          <p className="user">{userName}</p>
          <button className="logout" onClick={logout}>
            Logout
          </button>
        </div>
      </aside>

      {/* MAIN */}
      <main className="main">
        <h1 className="headline">
          Discover Powerful Products 🚀
        </h1>

        <ProductList />

        {role === "admin" && <ProductAdmin />}
      </main>

      {/* CART */}
      <aside className="cart">
        <Cart />
      </aside>
    </div>
  );
}

export default App;
