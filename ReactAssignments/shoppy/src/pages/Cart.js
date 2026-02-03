import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Cart() {
  const { cartItems, getTotalPrice } = useCart();

  return (
    <div className="container">
      <h2>Cart Page</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                borderBottom: "1px solid #ccc",
                padding: "15px 0"
              }}
            >
              <img src={item.image} alt={item.title} height="60" />

              <div style={{ flex: 1 }}>
                <strong>{item.title}</strong>
              </div>

              <div>₹ {item.price}</div>

              <div>Qty: {item.quantity}</div>
            </div>
          ))}

          <h3 style={{ marginTop: "20px" }}>
            Total Price: ₹ {getTotalPrice()}
          </h3>

          <Link to="/category/electronics">
            <button>Purchase More</button>
          </Link>
        </>
      )}
    </div>
  );
}

export default Cart;
