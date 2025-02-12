import React from "react";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";
import CartColumns from "./CartColumns";
import CartItem from "./CartItem";
import CartTotals from "./CartTotals";

const CartContent = () => {
  const { cart, clearCart } = useCartContext();
  console.log("🚀 ~ file: CarContent.js:11 ~ CartContent ~ cart:", cart)
  return (
    <Wrapper className="section section-center">
      {/* heading for cart screen tables  */}
      <CartColumns />
      {/* cart items */}
      {cart.map((item) => {
        {
         console.log("################################",JSON.stringify( item,null,2))
        }
        return <CartItem key={item.id} {...item} />;
      })}
      <hr />
      <div className="link-container">
        <Link to="/products" className=" btn">
          Continue Shopping
        </Link>
        <button
          type="button"
          className="link-btn clear-btn"
          onClick={clearCart}>
          clear shopping cart
        </button>
      </div>
      {/* cart total */}
      <CartTotals />
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .link-container {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }
  .link-btn {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
    background: var(--clr-primary-indianred);
    color: var(--clr-white);
    border-radius: var(--radius);
    letter-spacing: var(--spacing);
    font-weight: 400;
    cursor: pointer;
  }
  .clear-btn {
    background: var(--clr-black);
  }
`;
export default CartContent;
