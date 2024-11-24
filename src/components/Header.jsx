import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="py-6 mb-12 border-b bg-blue-400">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <img
            src="https://cdn.jabama.com/original/statics/desktop/img/jabama-logo-white.9c7a1d1.svg"
            alt="logo"
          />
        </Link>
        <ul className="flex gap-x-3">
          <li className="text-white hover:bg-blue-500 transition rounded-md p-2">
            <Link to="/login">LogIn</Link>
          </li>
          <li className="text-white hover:bg-yellow-500 transition rounded-md p-2">
            <Link to="/signup">SignUp</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
