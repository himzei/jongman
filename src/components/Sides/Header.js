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
                <div className="dropdown relative inline-block">
                  <Link to="/service1">업무분야</Link>
                  <ul class="dropdown-menu absolute hidden text-gray-700 pt-2 transform -translate-x-2">
                    <li class="">
                      <Link
                        className="hover:bg-gray-100 py-2 px-3 block whitespace-no-wrap"
                        to="service1"
                      >
                        상속
                      </Link>
                    </li>
                    <li class="">
                      <Link
                        class=" hover:bg-gray-100 py-2 px-3 block whitespace-no-wrap"
                        to="#"
                      >
                        양도
                      </Link>
                    </li>
                    <li class="">
                      <Link
                        class=" hover:bg-gray-100 py-2 px-3 block whitespace-no-wrap"
                        to="#"
                      >
                        증여
                      </Link>
                    </li>
                    <li class="">
                      <Link
                        class=" hover:bg-gray-100 py-2 px-3 block whitespace-no-wrap"
                        to="#"
                      >
                        일반 세무상담
                      </Link>
                    </li>
                  </ul>
                </div>
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
