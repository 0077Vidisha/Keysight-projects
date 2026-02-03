import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <div className="hero">
        <div className="hero-content">
          <h1>Shop Smart with Shoppy</h1>
          <p>
            Discover top-quality electronics and stylish clothing at unbeatable
            prices. Your one-stop destination for smart shopping.
          </p>

          <div className="hero-buttons">
            <Link to="/category/electronics">
              <button>Shop Electronics</button>
            </Link>
            <Link to="/category/clothing">
              <button className="secondary-btn">Shop Clothing</button>
            </Link>
          </div>
        </div>
      </div>

      {/* CATEGORY SECTION */}
      <div className="container">
        <h2 className="section-title">Shop by Category</h2>

        <div className="category-grid">
          <Link to="/category/electronics" className="category-card">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3659/3659899.png"
              alt="Electronics"
            />
            <h3>Electronics</h3>
            <p>ACs, mobiles, gadgets & more</p>
          </Link>

          <Link to="/category/clothing" className="category-card">
            <img
              src="https://cdn-icons-png.flaticon.com/512/892/892458.png"
              alt="Clothing"
            />
            <h3>Clothing</h3>
            <p>Latest fashion & trends</p>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;

