import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductsByCategory } from "../api";

function Category() {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let apiCategory =
      categoryName === "clothing"
        ? "men's clothing"
        : "electronics";

    getProductsByCategory(apiCategory).then(setProducts);
  }, [categoryName]);

  return (
    <div className="container">
      <h2>Welcome to {categoryName} Page</h2>

      <div className="grid">
        {products.map((p) => (
          <Link to={`/product/${p.id}`} key={p.id} className="card">
            <img src={p.image} alt={p.title} />
            <h4>{p.title.substring(0, 20)}...</h4>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Category;
