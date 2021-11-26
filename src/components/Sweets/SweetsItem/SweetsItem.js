import {useContext}from "react";
import SweetsForm from "./SweetsForm";
import classes from "./SweetsItem.module.css";
import CartContext from "../../../store/cart-context";

const SweetsItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  const cartCtx = useContext(CartContext);
  const onAddToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      amount: amount,
    });
  };
  return (
    <div className={classes.sweet}>
      <div className={classes.sweetImg}>
        <img src={props.img} alt="sweet image" />
      </div>
      <div className={classes.sweetInfo}>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <SweetsForm onAddToCart={onAddToCartHandler} />
    </div>
  );
};

export default SweetsItem;
