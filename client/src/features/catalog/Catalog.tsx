import { Product } from "../../app/models/product";
import ProductList from "./ProductList";
import { useState, useEffect } from "react";

export default function Catalog() {

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []); // IMPORTANT: The second parameter, a dependency empty array, instructs React to only load
          // this component ONCE even if the data or state changes. Not to be re-rendered.

  return (
    <>
      <ProductList products={products}></ProductList>
    </>
  );
}


