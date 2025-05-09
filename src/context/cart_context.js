import React, { useEffect, useContext, useReducer } from "react";
import reducer from "../reducers/cart_reducer";
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
} from "../actions";
import Notification from "../utils/Notification";

//get from local storage at the time of initializing
const getLocalStorage = () => {
  let cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(localStorage.getItem("cart"));
  } else {
    return [];
  }
};
const getLocalStorageCartItem = () => {
  let cart_item = localStorage.getItem("cart_item");
  
  if (cart_item) {
    console.log("local storage",cart_item);

    return JSON.parse(localStorage.getItem("cart_item"));
  } else {
    return [];
  }
};
const getLocalStorageCheckValue = () => {
  let check_value = localStorage.getItem("check_value");
  
  if (check_value) {
    console.log("local storage check_value",check_value);

    return JSON.parse(localStorage.getItem("check_value"));
  } else {
    return [];
  }
};

const initialState = {
  cart: getLocalStorage(),
  total_items: 0,
  total_amount: 0,
  shipping_fees: 0,
  cart_item:getLocalStorageCartItem(),
  check_value: getLocalStorageCheckValue(),
};

const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //add to cart
  const addToCart = (
    id,
    color,
    amount,
    product,
    mainSize,
    slug,
    images,
    value,
    sizeValue,
    getstock,
    sizeid,
    color_id,
    colorName,
    check
  ) => {
    
    console.log("checkkkk",check);
    
    dispatch({

      type: ADD_TO_CART,

      payload: {
        id,
        color,
        amount,
        product,
        mainSize,
        slug,
        images,
        value,
        sizeValue,
        getstock,
        sizeid,
        color_id,
        colorName,
        check_value:check,
      },
    });
    if(check == 1){
      // Notification("success", "Success!", "Product Add to Cart Successfully.");

    }else{
      Notification("success", "Success!", "Product Add to Cart Successfully.");

    }
  };
  //remove from cart
  const removeItem = (id) => {
    dispatch({ type: REMOVE_CART_ITEM, payload: id });
  };

  //toggle amount
  const toggleAmount = (id, value) => {
    dispatch({ type: TOGGLE_CART_ITEM_AMOUNT, payload: { id, value, check_value: state.check_value,} });
  };

  //clear cart
  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  //save cart to local storage
  // useEffect(() => {
    
  //   dispatch({ type: COUNT_CART_TOTALS,  
  //     payload: {
  //     check_value:check,
  //   }, });
  //   localStorage.setItem("cart", JSON.stringify(state.cart));
  //   console.log("useeffect used");
    
  // }, [state.cart,state.check_value]);

  useEffect(() => {
    // Dispatch the action with the current check_value
    dispatch({
      type: COUNT_CART_TOTALS,
      payload: {
        check_value: state.check_value, // Use state.check_value here
      },
    });
  
    // Save the cart to local storage
    localStorage.setItem("cart", JSON.stringify(state.cart));
    localStorage.setItem("cart_item", JSON.stringify(state.cart_item));
    localStorage.setItem("check_value", JSON.stringify(state.check_value));
  
    // Log for debugging
    // console.log("useEffect used");
    
  }, [state.cart, state.check_value,state.cart_item]); // Dependency on state.cart and state.check_value
  

  return (
    <CartContext.Provider
      value={{ ...state, addToCart, removeItem, toggleAmount, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
// make sure use
export const useCartContext = () => {
  return useContext(CartContext);
};