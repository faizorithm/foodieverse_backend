import { Link } from "react-router-dom";
import logo from "./logo.png";

function Navbar({ cartCount }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark px-4" style={{ backgroundColor: "#3a2b28" }}>
      
      <Link className="navbar-brand" to="/">
        <img src={logo} alt="FoodieVerse" style={{ height: "50px" }} />
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#nav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="nav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link className="nav-link text-white" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/menu">Menu</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/contact">Contact</Link>
        </li>
        <li><Link className="nav-link text-white" to="/cart">🛒 Cart ({cartCount})</Link></li>
      </ul>
      </div>

    </nav>
  );
}

export default Navbar;