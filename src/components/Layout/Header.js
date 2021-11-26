import {Fragment} from 'react';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
import headerbg from "../../img/header3.jpg";

const Header = (props) => {
    return (
        <Fragment>
         <header className={classes.header}>
          <h1>SWEET SHOP</h1>
          <HeaderCartButton onClick={props.onShow}/>
         </header>
         <div className ={classes.headerbg}>
             <img src ={headerbg} alt="sweets shop background"/>
         </div>
        </Fragment>
    )
}

export default Header;
