import React,{useContext} from "react";
import logo from '../logo.svg';
import {Link } from "react-router-dom";
import { CartContext } from "../CartContext";

export default function Navigation() {
  const navCartStyle = {
    background: "#f59e0d",
    display: "flex",
    padding: "5px 8px",
    borderRadius: "11px",
    position: "relative",
  };
  const { cart } = useContext(CartContext);
  return (
    <div>
      <div className="container mx-auto flex items-center justify-between py-4">
        <Link to="/">
          <img style={{ width: 74 }} src={logo} alt="Logo"></img>
        </Link>
        <nav>
          <ul className="flex items-center">
            <li className="ml-6">
              <Link to="/">Home</Link>
            </li>
            <li className="ml-6">
              <Link to="/products">Products</Link>
            </li>
            <li className="ml-6">
              <Link to="/cart">
                <div style={navCartStyle}>
                  <span className="">{cart.totalItems}</span>
                  <img className="ml-1" src="/images/cart.png" alt="cart"></img>
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
