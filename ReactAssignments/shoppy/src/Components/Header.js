import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Header() {
  const { cartItems } = useCart();

  return (
    <nav className="nav">
      {/* LOGO */}
      <Link to="/">
        <h2>Shoppy</h2>
      </Link>

      {/* NAV LINKS */}
      <div className="nav-links">
        <Link to="/category/electronics">Electronics</Link>
        <Link to="/category/clothing">Clothing</Link>

        {/* CART ICON */}
        <Link to="/cart" className="cart-icon">
          🛒
          {cartItems.length > 0 && (
            <span className="cart-badge">
              {cartItems.length}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}

export default Header;
