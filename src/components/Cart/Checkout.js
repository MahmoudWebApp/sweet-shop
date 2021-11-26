import React, { useRef, useState } from "react";
import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
// const isFiveChars = value => value.lenght === 5;

const Checkout = (props) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    city: true,
    post: true,
  });
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPost = postInputRef.current.value;
    const enteredCity = cityInputRef.current.value;
    const namedValid = !isEmpty(enteredName);
    const streetValid = !isEmpty(enteredStreet);
    const cityValid = !isEmpty(enteredCity);
    const postvalid = !isEmpty(enteredPost);
    setFormInputsValidity({
      name: namedValid,
      street: streetValid,
      city: cityValid,
      post: postvalid,
    });
    const formIsValid = namedValid && streetValid && cityValid && postvalid;
    if (!formIsValid) {
      return;
    }
    props.onConfrim({
      name: enteredName,
      street: enteredStreet,
      city: enteredCity,
      postal: enteredPost,
    });
  };
  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div
        className={`${classes.control} ${
          formInputsValidity.name ? "" : classes.invalid
        }`}
      >
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputsValidity.name && <p>please enter a valid name!</p>}
      </div>
      <div
        className={`${classes.control} ${
          formInputsValidity.street ? "" : classes.invalid
        }`}
      >
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formInputsValidity.street && <p>please enter a valid street!</p>}
      </div>
      <div
        className={`${classes.control} ${
          formInputsValidity.post ? "" : classes.invalid
        }`}
      >
        <label htmlFor="post">Postal code</label>
        <input type="text" id="post" ref={postInputRef} />
        {!formInputsValidity.post && (
          <p>please enter a valid postal code (5 characters long)!</p>
        )}
      </div>
      <div
        className={`${classes.control} ${
          formInputsValidity.city ? "" :  classes.invalid
        }`}
      >
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formInputsValidity.city && <p>please enter a valid city!</p>}
      </div>
      <div className={classes.action}>
        <button onClick={props.onCancel}>Cancel</button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
