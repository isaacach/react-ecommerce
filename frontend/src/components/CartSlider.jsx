import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function CartSlider() {
  const { cart } = useContext(CartContext);

  const renderedCartProducts = cart.map((prod, index) => {
    return (
      <div key={index}>
        <p>{prod.title}</p>
        <p>Price: ${prod.price}</p>
      </div>
    )
  })

  return (
    <div className="cart-slider">
      {renderedCartProducts}
    </div>
  )

  
}