/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import { getProductWithCategory, getAllProducts } from "../api/api"

export default function Shop({ category }) {
  const [products, setProducts] = useState([])

  useEffect(() => {
    if (!category) {
      const getProducts = async () => {
        let prods = await getAllProducts();
        setProducts(await prods)
      }
      getProducts();
    }
  },[])

  useEffect(() => {
    const getProductsCategory = async (category) => {
      let prods = await getProductWithCategory(category);
      setProducts(await prods);
      console.log(products);
    }
    getProductsCategory()
    
  },[category])

  return (
    <div>
      {products.map((prod, index) => {
        return (
          <div key={index} className="product-card">
            <img src={prod.image} style={{width: '300px'}}/>
            <p>{prod.title}</p>
            <p>{prod.description}</p>
          </div>
        )
      })}
    </div>
  )
}