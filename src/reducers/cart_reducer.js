import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from "../actions";

const cart_reducer = (state, action) => {
  // add to cart reducer
  if (action.type === ADD_TO_CART) {
    const {
      id,
      color,
      amount,
      product,
       slug,
      images,
      value,
      sizeValue,
      getstock,
      sizeid,
      color_id,
      colorName,
      check_value,
    } = action.payload;

    console.log("===>",check_value);

    const tempItem = state.cart.find((i) => i.id === id + value);
    if (tempItem) {
      console.log("aaa");
      
      const tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === id + value) {
          let newAmount = cartItem.amount + amount;
          if (newAmount > cartItem.max) {
            newAmount = cartItem.max;
          }
          return { ...cartItem, amount: newAmount };
        } else {
          return cartItem;
        }
      });

      return { ...state, cart: tempCart,check_value };
    }
    //  else if(check_value == 1 ){
    //   console.log("bbb");
      
    //   const newItem2 = {
    //     id: id + value,
    //     idmain: id,
    //     slug: slug,
    //     name: product.name,
    //     color,
    //     amount,
    //     image: images,
    //     // price: product.price,
    //     price: value,
    //     // max: product.stock,
    //     max: getstock,
    //     size: sizeValue,
    //     sizeid:sizeid,
    //     color_id:color_id,
    //     colorName:colorName
    //   };
    //   // console.log("123", newItem);
    //   return { ...state, cart_item: [newItem2],cart: [...state.cart, newItem2],check_value  };
    // }
    else {
      console.log("ccc");
      const newItem = {
        id: id + value,
        idmain: id,
        slug: slug,
        name: product.name,
        color,
        amount,
        image: images,
        // price: product.price,
        price: value,
        // max: product.stock,
        max: getstock,
        size: sizeValue,
        sizeid:sizeid,
        color_id:color_id,
        colorName:colorName
      };
      // console.log("123", newItem);
      return { ...state, cart: [...state.cart, newItem],check_value };
    }
  }
  // remove from cart reducer
  if (action.type === REMOVE_CART_ITEM) {
    const tempCart = state.cart.filter((item) => item.id !== action.payload);
    return { ...state, cart: tempCart, cart_item: tempCart };
  }
  // cleaer cart
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [], cart_item: [] };
  }
  //toggle quantity
if (action.type === TOGGLE_CART_ITEM_AMOUNT) {
  const { id, value, check_value } = action.payload;

  // if (check_value === 1) {
  //   console.log("Updating amount in cart_item");

  //   const tempCart = state.cart_item.map((item) => {
  //     if (item.id === id) {
  //       let newAmount = item.amount;

  //       if (value === "inc") {
  //         newAmount = Math.min(item.amount + 1, item.max); // Increment, but don't exceed max
  //       } else if (value === "dec") {
  //         newAmount = Math.max(item.amount - 1, 1); // Decrement, but don't go below 1
  //       }

  //       return { ...item, amount: newAmount };
  //     }
  //     return item;
  //   });

  //   return { ...state, cart_item: tempCart };
  // } 
  // else if (check_value === 0) {
    console.log("Updating amount in cart");

    const tempCart = state.cart.map((item) => {
      if (item.id === id) {
        let newAmount = item.amount;

        if (value === "inc") {
          newAmount = Math.min(item.amount + 1, item.max); // Increment, but don't exceed max
        } else if (value === "dec") {
          newAmount = Math.max(item.amount - 1, 1); // Decrement, but don't go below 1
        }

        return { ...item, amount: newAmount };
      }
      return item;
    });

    return { ...state, cart: tempCart };
  // }

  // Default case if check_value is invalid
  console.log("Invalid check_value");
  return state;
}

 
  if (action.type === COUNT_CART_TOTALS) {
    // const { check_value } = action.payload;
  
    // if (check_value === 1) {
    //   console.log("Processing cart_item totals");
  
    //   const { total_items, total_amount } = state.cart_item.reduce(
    //     (total, cartItem) => {
    //       const { amount, price } = cartItem;
    //       total.total_items += amount;
    //       total.total_amount += price * amount;
    //       return total;
    //     },
    //     {
    //       total_items: 0,
    //       total_amount: 0,
    //     }
    //   );
    //   return { ...state, total_items, total_amount };
    // } 
    // else if (check_value === 0) {
    //   console.log("Processing cart totals");
  
    //   const { total_items, total_amount } = state.cart.reduce(
    //     (total, cartItem) => {
    //       const { amount, price } = cartItem;
    //       total.total_items += amount;
    //       total.total_amount += price * amount;
    //       return total;
    //     },
    //     {
    //       total_items: 0,
    //       total_amount: 0,
    //     }
    //   );
    //   return { ...state, total_items, total_amount };
    // } else {
    //   console.log("Invalid check_value");
    //   return state; // Return the current state if check_value is invalid
    // }

    const { total_items, total_amount } = state.cart.reduce(
      (total, cartItem) => {
        const { amount, price } = cartItem;
        total.total_items += amount;
        total.total_amount += price * amount;
        return total;
      },
      {
        total_items: 0,
        total_amount: 0,
      }
    );

        // Apply shipping fee if total_amount is less than 1000
        const shipping_fees = total_amount < 1000 ? 50 : 0;
        
    return { ...state, total_items, total_amount,shipping_fees };
    
    
  }
  

  return state;
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default cart_reducer;
