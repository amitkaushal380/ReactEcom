import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import Homepage from "./Homepage";
import Products from "./Products";
import Cart from "./Cart";
import Navigation from "./Navigation";
import SingleProduct from './SingleProduct';

export default function Header() {

  return (
    <>
     <Router>
<Navigation></Navigation>
    <div className=""> 
      <Switch>
          <Route path="/" exact><Homepage></Homepage></Route>
            <Route path="/products" exact><Products></Products></Route>
            <Route path="/products/:id"><SingleProduct/></Route>
          <Route path="/cart"><Cart></Cart></Route>
      </Switch>
        </div>  
        </Router>
        </>
  );
}
