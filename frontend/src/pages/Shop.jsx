/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { getProductWithCategory, getAllProducts } from "../api/api";
import Rating from "@mui/material/Rating";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import "../styles/shop.css";
import { CartContext } from "../context/CartContext";

export default function Shop({ category }) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [count, setCount] = useState(0);
  const { cart, setCart } = useContext(CartContext);

  let USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

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
    }, 50);
    return () => clearInterval(interval);
  }, [products]);

  const handleCartAddClick = (e) => {
    console.log(e.target.id);
    const chosenProduct = products.find((prod) => e.target.id == prod.id);
    setCart([...cart, chosenProduct]);
  };

  let renderedProducts = products.slice(0, count).map((prod, index) => {
    return (
      <div key={index} className="product-card">
        <div className="product-image-wrapper">
          <img className="product-image" src={prod.image} />
        </div>
        <div className="description">
          <p className="title">{prod.title}</p>
          <div className="rating-price-wrapper">
            <div className="rating-price">
              <Rating
                value={prod.rating.rate}
                precision={0.1}
                size="small"
                readOnly
              />
              <p className="price">{USDollar.format(prod.price)}</p>
            </div>
            <div
              className="button-wrapper"
              id={index + 1}
              onClick={handleCartAddClick}
            >
              <MdOutlineAddShoppingCart />
            </div>
          </div>
        </div>
      </div>
    );
  });

  console.log(products);
  console.log(cart);
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
