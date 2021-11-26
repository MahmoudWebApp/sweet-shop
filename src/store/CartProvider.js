import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartContex = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updateTotalAmount =
      state.totalAmount + action.item.amount * action.item.price;
    const existingCartdItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartdItem = state.items[existingCartdItemIndex];
    let updateItems;
    if (existingCartdItem) {
      const updateItem = {
        ...existingCartdItem,
        amount: existingCartdItem.amount + action.item.amount,
      };
      updateItems = [...state.items];
      updateItems[existingCartdItemIndex] = updateItem;
    } else {
      updateItems = state.items.concat(action.item);
    }

    return {
      items: updateItems,
      totalAmount: updateTotalAmount,
    };
  }
  if (action.type === "REMOVE") {
    const existingCartdItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingCartdItem = state.items[existingCartdItemIndex];
    const updateTotalAmount = state.totalAmount - existingCartdItem.price;
    let updateItems;
    if (existingCartdItem.amount === 1) {
      updateItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updateItem = {
        ...existingCartdItem,
        amount: existingCartdItem.amount - 1,
      };
      updateItems = [...state.items];
      updateItems[existingCartdItemIndex] = updateItem;
    }
    return {
      items: updateItems,
      totalAmount: updateTotalAmount,
    };
  }
  if(action.type==="CLEAR"){
    return defaultCartContex;
  }

  return defaultCartContex;
};
const CartProcider = (props) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartContex);

  const addItemHandler = (item) => {
    dispatchCart({ type: "ADD", item: item });
  };
  const removeItemHandler = (id) => {
    dispatchCart({ type: "REMOVE", id: id });
  };
  const clearItemHandler = () => {
    dispatchCart({ type: "CLEAR"});
  };
  const cartContex = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    clearItem:clearItemHandler
  };
  return (
    <CartContext.Provider value={cartContex}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProcider;
