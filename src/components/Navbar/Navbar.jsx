import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/">Linkies</Link>
      </div>
      <button
        className={styles.hamburger}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </button>
      <div className={`${styles.menu} ${isOpen ? styles.open : ""}`}>
        <Link to="/" className={styles.link}>
          Home
        </Link>
        <Link to="/posts" className={styles.link}>
          posts
        </Link>
        <Link to="/addpost" className={styles.link}>
          Add Post
        </Link>
      </div>
    </nav>
  );
}
