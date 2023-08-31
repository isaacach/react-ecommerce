import { useEffect, useState } from "react";
import { getProductWithLimit } from "../api/api";
import '../styles/home.css'

export default function Home() {
  const [heroProducts, setHeroProducts] = useState(undefined);

  useEffect(() => {
    const getProducts = async () => {
      const products = await getProductWithLimit(10);
      if (products) {
        setHeroProducts(products);
      }
    }
    getProducts()
  }, [])

  console.log(heroProducts);

  return (
    <div>
      <header>
        <h3>Home</h3>
      </header>
      <div className="hero-carousel">
        {heroProducts && heroProducts.map((prod, index) => {
          return (
          <div key={index} className="product-card">
            <img src={prod.image} style={{width: '300px'}}/>
            <p>{prod.title}</p>
            <p>{prod.description}</p>
          </div>
          )
        })}
      </div>
      <div></div>
    </div>
  );
}
