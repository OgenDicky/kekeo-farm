import React, { useEffect, useState } from "react";

export default function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1>Kekeo Farm & General Supplies</h1>
      <p>📞 0725444041 / 0720881821 | ✉️ kekeofarm@gmail.com</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
        {products.map((p) => (
          <div key={p.id} style={{ border: "1px solid #ddd", padding: "10px", borderRadius: "10px" }}>
            <img src={p.image} alt={p.name} style={{ width: "100%", borderRadius: "10px" }} />
            <h3>{p.name}</h3>
            <p>Price: KES {p.price}</p>
            <button style={{ padding: "10px", background: "green", color: "white", border: "none", borderRadius: "5px" }}>Order</button>
          </div>
        ))}
      </div>
    </div>
  );
}
