import { Link } from "react-router-dom";
import "./Auth.css";

export default function Register() {
  return (
    <div className="auth">
      <h2>Register</h2>
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button>Register</button>
      <p>Already have an account? <Link to="/login">Login</Link></p>
    </div>
  );
}
