import React, { useEffect, useState } from "react";

export default function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://kekeo-farm.onrender.com/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data)) // ✅ actually update products
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  // ✅ function to handle order
  const orderProduct = (productId) => {
    fetch("https://kekeo-farm.onrender.com/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ product_id: productId, quantity: 1 }),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(`✅ Order placed successfully for product ID: ${productId}`);
        console.log("Order response:", data);
      })
      .catch((err) => {
        alert("❌ Failed to place order");
        console.error("Error placing order:", err);
      });
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1>Kekeo Farm & General Supplies</h1>
      <p>📞 0725444041 / 0720881821 | ✉️ kekeofarm@gmail.com</p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
        }}
      >
        {products.map((p) => (
          <div
            key={p.id}
            style={{
              border: "1px solid #ddd",
              padding: "10px",
              borderRadius: "10px",
            }}
          >
            <img
              src={p.image}
              alt={p.name}
              style={{ width: "100%", borderRadius: "10px" }}
            />
            <h3>{p.name}</h3>
            <p>Price: KES {p.price}</p>
            <button
              onClick={() => orderProduct(p.id)} // ✅ wired up
              style={{
                padding: "10px",
                background: "green",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Order
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
