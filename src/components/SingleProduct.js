import React, { useState, useEffect, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import { CartContext } from "../CartContext";

const SingleProduct = () => {
  const [product, setProduct] = useState({});
  const params = useParams();
  const history = useHistory();
  // console.log(params);

  useEffect(() => {
    getroductDetailData();
  }, [params.id]);

  const getroductDetailData = async () => {
    await fetch(`https://fakestoreapi.com/products/${params.id}`)
      .then((resposne) => resposne.json())
      .then((product) => {
        // console.log(product);
        setProduct(product);
      });
  };

  const BackClickHandler = () => {
    history.goBack();
    };
    
  const { cart, setCart } = useContext(CartContext);
  const [isAdding, setisAdding] = useState(false);

  const AddCartHandler = (event, product) => {
    console.log(product);
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
  };

  return (
    <div className="container mx-auto mt-10">
      <button className="mb-12 font-bold" onClick={BackClickHandler}>
        Back
      </button>
      <div className="flex">
        <div className="singleimage">
          <img src={product.image} alt=""></img>
        </div>

        <div className="ml-16">
          <h1 className="text-xl font-bold">{product.title}</h1>
          <div className="text-md">{product.category}</div>
          <div className="mt-2">{product.description}</div>
          <div className="font-bold mt-2">${product.price}</div>
          <button
            disabled={isAdding}
            onClick={(event) => {
              AddCartHandler(event, product);
            }}
            className={`${
              isAdding ? "bg-green-500" : "bg-yellow-500"
            } px-8 py-2 rounded-full text-white font-bold mt-4`}
          >
            Add{isAdding ? "ed" : ""} to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
