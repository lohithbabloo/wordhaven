import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between mt-[20px] items-center mb-[20px]">
        <div className="text-2xl font-bold">
          <a href="#">WordHaven</a>
        </div>
        <div className="flex gap-[20px] text-base">
          <a href="#" title="Login">
            Login
          </a>
          <a href="#" title="Register">
            Register
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
