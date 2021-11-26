import {useRef} from 'react';
import Input from "../../UI/Input";
import classes from "./SweetsForm.module.css";


const SweetsForm = (props) => {
  const AmountRef=useRef();
  const submitHandler=(event)=>{
    event.preventDefault();
    const enteredAmount = AmountRef.current.value ;
    const enteredAmountNumber = +enteredAmount;
    if(enteredAmount.trim().lenght ===0||enteredAmountNumber < 1 || enteredAmountNumber > 5 ){
      return;
    }
    props.onAddToCart(enteredAmountNumber);

  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={AmountRef}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+Add</button>
    </form>
  );
};

export default SweetsForm;
