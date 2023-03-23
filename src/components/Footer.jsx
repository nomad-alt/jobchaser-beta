import React from "react";
import styles from "./Footer.module.scss";
function Footer() {
  return (
    <div className={styles.footer}>
      <div>
        <h2>Contact us</h2>
        <h3>mobile: 070000000</h3>
        <h4>coconut@gmail.com</h4>
        <h2> 2023 Coconut  </h2>
      </div>
      <p>
        <img src="./coconut-water-2.png" />
      </p>
    </div>
  );
}

export default Footer;
