import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductById } from "../api";
import { useCart } from "../context/CartContext";

function Product() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(id).then(setProduct);
  }, [id]);

  if (!product) return <p>Loading...</p>;

  function handleAddToCart() {
    addToCart(product);
    navigate("/cart");
  }

  return (
    <div className="product">
      <img src={product.image} alt={product.title} />

      <div className="product-details">
        <h2>{product.title}</h2>
        <p>⭐ 4.0 Rating | 1,581 ratings</p>
        <p className="price">₹ {product.price}</p>

        <button onClick={handleAddToCart}>Add to Cart</button>

        <p><strong>Category:</strong> {product.category}</p>
        <p>{product.description}</p>
      </div>
    </div>
  );
}

export default Product;
