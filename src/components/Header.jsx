import React from "react";
import logo from '../assets/logo.png';
import styles from "./Header.module.scss";

function Header() {
    return (
        <div className={styles.logo}>
             <h1>Coconut</h1>
           <p> <img src={logo} alt="Logo" /></p>
        </div>
    )
}

export default Header;



    



    
