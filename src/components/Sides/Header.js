import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <>
      <div
        className={
          navbar
            ? "sticky-top bg-white border-b transition duration-500 ease-in-out"
            : "sticky-top transition duration-500 ease-in-out"
        }
      >
        <div
          className="max-w-7xl py-3 mx-auto font-medium flex items-center justify-between "
          style={{ zIndex: 2, position: "relative" }}
        >
          <div>
            <img src="images/logo.png" alt="logo" width="200px" />
          </div>
          <div>
            <ul className="flex items-center justify-center pt-2">
              <li className="mx-6">
                <Link to="/">HOME</Link>
              </li>
              <li className="mx-6">
                <Link to="/service1">업무분야</Link>
              </li>
              <li className="mx-6">
                <Link to="/consult">상담접수 및 비용안내</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
