import React from "react";
import styles from "./Navbar.module.css";

const Navbar = ({ counter }) => {
  return (
    <div className={styles.navbar}>
      <h1>
        Navbar<span>{counter}</span>
      </h1>
    </div>
  );
};

export default Navbar;
