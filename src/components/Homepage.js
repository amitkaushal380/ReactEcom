import React from "react";
import ProductList from "./ProductList";

export default function Homepage() {
  return (
    <>
      <div className="hero py-25 mt-6">
        <div className="container mx-auto flex items-center justify-between">
          <div className="w-1/2 text-left">
            <h6 className="text-lg">
              <em>Sub Title</em>
            </h6>
            <h1 className="text-3xl md:text-6xl font-bold">Main heading</h1>
            <button className="px-8 py-4 rounded-full text-white font-bold mt-6 bg-yellow-500 hover:bg-yellow-600">
              Order Now
            </button>
          </div>
          <div className="w-1/2">
            <img className="w-4/5" src="/images/shopping-img.svg" alt="banner"></img>
          </div>
        </div>
          </div>
          
          <div className="mt-20">
          <ProductList></ProductList>
          </div>
    </>
  );
}
