import { Link } from "react-router-dom";
import "./Navbar.css";
import axios from "axios";

export default function Navbar() {
  
  const API = "https://tinylink-backend-l4xr.onrender.com"
  const healthcheckfunction=async()=>{
    const resposne = await axios.get(`${API}/healthz`);
        alert( "Database Connection : "+resposne.data.database);
  }
  
  return (
    <nav className="nav">
      <h1 className="nav-title">TinyLink</h1>

      <div className="nav-links">
        <Link to="/" className="nav-link">Dashboard</Link>
        <Link to="/add" className="nav-link">Add New</Link>
        <p className="nav-link" onClick={()=>healthcheckfunction()}>Check DB Health</p>
      </div>
    </nav>
  );
}
