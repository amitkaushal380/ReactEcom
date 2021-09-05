import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext";
import Cart from "./Cart";
import "./ProductListBlock.css";

const ProductListBlock = (props) => {
  const { product } = props;
  const { cart, setCart } = useContext(CartContext);
  const [isAdding, setisAdding] = useState(false);

  const AddCartHandler = (event, product) => {
    
    event.preventDefault();
    let _cart = { ...cart };
    if (!_cart.items) {
      _cart.items = {};
    }

    if (_cart.items[product.id]) {
      _cart.items[product.id] = _cart.items[product.id] + 1;
      //  _cart.items[product.id] += 1;  shortcut way
    } else {
      _cart.items[product.id] = 1;
    }

    if (!_cart.totalItems) {
      _cart.totalItems = 0;
    }

    _cart.totalItems += 1;
    setCart(_cart);
    setisAdding(true);

    setTimeout(() => {
      setisAdding(false);
    }, 1000);
   // console.log(cart);
  };

  return (
    <>
    <Link to={`/products/${product.id}`}>
      <div className="productListBlock">
        <img src={product.image} alt="product"></img>
        <div className="text-center">
          <h2 className="font-bold mt-6 mb-1 text-lg"> {product.title}</h2>
          <span className="bg-gray-200 p-1 rounded-full text-sm px-4">
            {product.category}
          </span>
        </div>

        <div className="flex justify-between items-center mt-6">
          <span className="font-600">${product.price}</span>
          <button
            disabled={isAdding}
            onClick={(event) => {
              AddCartHandler(event, product);
            }}
            className={`${
              isAdding ? "bg-green-500" : "bg-yellow-500"
            } px-4 py-1 rounded-full text-white font-bold `}
          >
            Add{isAdding ? "ed" : ""}
          </button>
        </div>
      </div>
      </Link>
      
    </>
  );
};

export default ProductListBlock;
