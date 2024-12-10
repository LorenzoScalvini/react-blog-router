import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import styles from "./MainLayout.module.css";

export default function MainLayout() {
  return (
    <div className={styles.layout}>
      <header>
        <Navbar />
      </header>

      <main className={styles.mainContent}>
        <Outlet />
      </main>

      <footer className={styles.footer}>
        <p>© 2024 Lorenzo Scalvini.</p>
        <p>
          Follow us on
          <a href="https://twitter.com" target="_blank" rel="#">
            {" "}
            Twitter
          </a>
          ,
          <a href="https://facebook.com" target="_blank" rel="#">
            {" "}
            Facebook
          </a>
          , and
          <a href="https://instagram.com" target="_blank" rel="#">
            {" "}
            Instagram
          </a>
          .
        </p>
      </footer>
    </div>
  );
}
