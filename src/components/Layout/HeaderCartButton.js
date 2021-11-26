import { useState, useEffect, useContext } from "react";
import { BsFillCartFill } from "react-icons/bs";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const [buttonIsbump, setButtonIsbump] = useState(false);
  const cartCtx = useContext(CartContext);
  const {items} = cartCtx;
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  useEffect(() => {
    if (items.length === 0) {
      return;
    
    }
      setButtonIsbump(true);
  
    const timer = setTimeout(() => {
      setButtonIsbump(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  const classesButton = `${classes.button} ${buttonIsbump?classes.bump : ''}`;
  return (
    <button className={classesButton} onClick={props.onClick}>
      <span className={classes.icon}>
        <BsFillCartFill />
      </span>
      <span>Your Cart</span>
      <span className={classes.badeg}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
