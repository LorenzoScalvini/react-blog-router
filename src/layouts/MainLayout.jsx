import React from "react";
import { Outlet, Link } from "react-router-dom";

function MainLayout() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <p>© 2024 My Website</p>
      </footer>
    </div>
  );
}

export default MainLayout;
