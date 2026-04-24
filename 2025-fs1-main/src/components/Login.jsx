import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [role, setRole] = useState("user");

  return (
    <div className="login-bg">
      <div className="login-box">
        <h1>⚡ ShopX</h1>
        <p>Bold shopping starts here</p>

        <input
          placeholder="Enter username"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>

        <button
          className="login-btn"
          onClick={() => name && login(name, role)}
        >
          Enter
        </button>
      </div>
    </div>
  );
};

export default Login;
