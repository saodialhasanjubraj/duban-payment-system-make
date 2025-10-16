import React from "react";
import { BrandImage } from "../../../public/BrandLogo";

const Navbar = () => {
  const links = (
    <div className="flex lg:flex-row flex-col items-center gap-x-4 gap-y-3 lg:gap-y-0">
      <li>Home</li>
      <li>Reunion</li>
      <li>Members</li>
      <li>BeaMember</li>
      <li>Executives</li>
      <li>DubanaTalk</li>
      <li>Articles</li>
      <li>Activity</li>
      <li>Gallery</li>
      <li>About Us</li>
    </div>
  );
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <img src={BrandImage} alt="" srcset="" className="h-10 w-30" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn text-yellow-400">Local Storage</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
