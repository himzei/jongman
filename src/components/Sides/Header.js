import React from "react";

function Header() {
  return (
    <>
      <div
        className="max-w-7xl py-4 mx-auto font-medium flex items-center justify-between"
        style={{ zIndex: 2, position: "relative" }}
      >
        <div>
          <img src="images/logo.png" alt="logo" width="200px" />
        </div>
        <div>
          <ul className="flex items-center">
            <li className="mx-10">HOME</li>
            <li className="mx-10">업무분야</li>
            <li className="mx-10">상담접수 및 비용안내</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
