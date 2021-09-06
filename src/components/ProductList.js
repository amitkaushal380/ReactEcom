import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";
import ProductListBlock from "./ProductListBlock";

const ProductList = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let mounted = true;


    const fetchProducts = async () => {
      const products = await fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((products) => {
        if (mounted) {
          setProducts(products);
        }
        //  console.log(products);
      });
    }
    fetchProducts();

    return () => {
      mounted = false;
    };
  }, []);

  var totalItems = products.length;
  var postsperpage = 8;
  var totalPagescount = Math.ceil(totalItems / postsperpage);

  return (
    <div className="container mx-auto pb-20">
      <h2 className="font-bold text-lg my-8">Products List by</h2>

      {/*products.map((product) => (
          <ProductListBlock key={product.id} product={product}></ProductListBlock>
        )) */}
      {products.length > 0 ? (
        <div className="grid grid-cols-4 my-8 gap-10">
          <Pagination
            data={products}
            RenderComponent={ProductListBlock}
            title="Posts"
            pageLimit={totalPagescount}
            dataLimit={postsperpage}
          />
        </div>
      ) : (
          
        <p>No Posts to display</p>
      )}
    </div>
  );
};

export default ProductList;
