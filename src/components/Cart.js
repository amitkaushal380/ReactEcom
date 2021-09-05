import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { CartContext } from "../CartContext";

function Cart() {
  const [cartProducts, setcartProducts] = useState([]);
  const { cart } = useContext(CartContext);

  useEffect(() => {
    if (!cart.items) {
      return;
    } else {
      GetCart();
    }
  }, [cart]);

  const GetCart = async () => {
   /* await fetch("https://fakestoreapi.com/carts")
      .then((result) => result.json())
      .then((products) => {
        setcartProducts(products);
        console.log(products);
      });*/
    //console.log({ ids: Object.values(cart.items) });
    
      await fetch('https://fakestoreapi.com/carts',{
        method:"POST",
        body:JSON.stringify(
          {
                products:[{productId:1,quantity:2}]
            }
        )
    })
        .then(res=>res.json())
  .then(json => console.log(json))
    
  };

  return (
    <div className="container mx-auto lg:1-1/2 w-full pb-24">
      <h1 className="my-12 font-bold">WORK IN PROGRESS</h1>
      <ul>
        <li className="flex items-center justify-between">
          <div className="flex items-center">
            <img className="h-10" src="/images/shopping-img.svg" alt="image" />
            <span className="font-bold ml-2">Product name</span>
          </div>
          <div className="flex items-center">
            <button className="bg-yellow-500 font-bold px-4 py-2 rounded-full">
              -
            </button>
            <b className="py-2 px-4">1</b>
            <button className="bg-yellow-500 font-bold px-4 py-2 rounded-full">
              +
            </button>
          </div>

          <div>
            <strong>$200</strong>
          </div>

          <div>
            <button className="bg-yellow-600 font-bold px-4 py-2 rounded-full">
              Delete
            </button>
          </div>
        </li>
      </ul>
      <hr className="mt-8"></hr>
      <div className="text-right mt-4">
        <strong>Grand Total:</strong> $600
        <br />
        <button className="bg-yellow-500 font-bold px-4 py-2 rounded-full mt-4">
          Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;
