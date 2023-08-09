import React from "react";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="flex justify-between mt-[20px] items-center mb-[20px]">
        <div className="text-2xl font-bold">
          <Link to="/">WordHaven</Link>
        </div>
        <div className="flex gap-[20px] text-base">
          <Link to="/login" title="Login">
            Login
          </Link>
          <Link to="/register" title="Register">
            Register
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
