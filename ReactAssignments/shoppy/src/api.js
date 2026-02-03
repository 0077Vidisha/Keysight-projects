const CUSTOM_AC_PRODUCT = {
  id: 101,
  title:
    "Daikin 1.5 Ton 3 Star Inverter Split AC (Copper, PM 2.5 Filter, Triple Display, Dew Clean Technology, Coanda Airflow, 2023 Model, MTKL50U, White)",
  price: 36990,
  category: "electronics", // IMPORTANT: must match fakestore
  description:
    "High-efficiency inverter split AC with PM 2.5 filter, triple display, and Coanda airflow for uniform cooling. 1.5 Ton, 3 Star, 2023 model.",
  image: "/images/daikin-ac.png"
};

// 🔹 Get single product
export async function getProductById(id) {
  if (parseInt(id) === 101) {
    return CUSTOM_AC_PRODUCT;
  }

  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  return res.json();
}

// 🔹 Get products by category
export async function getProductsByCategory(category) {
  const res = await fetch(
    `https://fakestoreapi.com/products/category/${category}`
  );
  const data = await res.json();

  // 👉 Inject AC ONLY into electronics
  if (category === "electronics") {
    return [CUSTOM_AC_PRODUCT, ...data];
  }

  return data;
}
