/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { getProductWithCategory, getAllProducts } from "../api/api";
import '../styles/shop.css'

export default function Shop({ category }) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log("effect ran");
    if (!category) {
      const getProducts = async () => {
        setIsLoading(true);
        let prods = await getAllProducts();
        setProducts(await prods);
        setIsLoading(false);
      };
      getProducts();
    }
  }, []);

  useEffect(() => {
    if (category) {
      const getProductsCategory = async (category) => {
        let prods = await getProductWithCategory(category);
        setProducts(await prods);
      };
      getProductsCategory();
    }
  }, [category]);

  console.log(products);
  return (
    <div className="shop">
      {isLoading && (
        <div className="loader">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}
      {products &&
        products.map((prod, index) => {
          return (
            <div key={index} className="product-card">
              <img src={prod.image} style={{ width: "300px" }} />
              <p>{prod.title}</p>
              <p>{prod.description}</p>
            </div>
          );
        })}
    </div>
  );
}
