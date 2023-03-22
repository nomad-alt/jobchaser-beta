import React from "react";
import styles from "./Fotter.module.scss";
function Fotter() {
  return (
    <div className={styles.fotter}>
      <div>
        <h2>Kontakta oss</h2>
        <h3>mobil: 070000000</h3>
        <h4>cocunat@gmail.com</h4>
        <h2>2023 Coconut</h2>
      </div>
      <p>
        <img src="./coconut-water-2.png" />
      </p>
    </div>
  );
}

export default Fotter;
