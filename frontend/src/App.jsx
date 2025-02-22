import { useState ,useEffect } from 'react'

import axios from "axios";
import "./App.css";


function App() {
  
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from the Express backend
    axios
      .get("http://localhost:5000/api/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);
  return (
    <>
      <div className="App">
        <h1>Store Products</h1>
        <div className="product-list">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>${product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App
