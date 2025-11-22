import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="nav">
      <h1 className="nav-title">TinyLink</h1>

      <div className="nav-links">
        <Link to="/" className="nav-link">Dashboard</Link>
        <Link to="/add" className="nav-link">Add New</Link>
      </div>
    </nav>
  );
}
