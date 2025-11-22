import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/Menu.css";

function MenuItem({image, name ,price}) {
    const {addToCart}= useContext(CartContext);


  return (
    <div  className="menuItem"
    onClick={() => addToCart({name, price})}
    >
         <div
        className="menuItemImage"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
<h1>
    {name}
</h1>
<p>
${price}
</p>
    </div>
  );
}

export default MenuItem