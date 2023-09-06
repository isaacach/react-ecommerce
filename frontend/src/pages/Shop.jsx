/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { getProductWithCategory, getAllProducts } from "../api/api";
import "../styles/shop.css";

export default function Shop({ category }) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [count, setCount] = useState(0);

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

  useEffect(() => {
    let counter = count;
    const interval = setInterval(() => {
      if (counter >= products.length) {
        clearInterval(interval);
      } else {
        setCount((count) => count + 1);
        counter++;
      }
    }, 100);
    return () => clearInterval(interval);
  }, [products]);

  let renderedProducts = products.slice(0, count).map((prod, index) => {
    return (
      <div key={index} className="product-card">
        <div className="product-image-wrapper">
          <img
            className="product-image"
            src={prod.image}
            style={{ width: "300px" }}
          />
        </div>
        <div className="description">
          <p className="title">{prod.title}</p>
          <div className="button-wrapper">
            <button>Add to favorites</button>
            <button>Add to cart</button>
          </div>
        </div>
      </div>
    );
  });

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
      {renderedProducts}
    </div>
  );
}
