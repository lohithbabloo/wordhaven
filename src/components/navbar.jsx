import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch("http://localhost:4000/profile", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((userInfo) => {
        setUser(userInfo.email);
      });
  }, []);
  function logout() {
    fetch("http://localhost:4000/logout", {
      credentials: "include",
      method: "POST",
    });
    setUser(null);
  }
  return (
    <>
      <div className="flex justify-between my-[20px] items-center mx-auto max-w-lg md:max-w-5xl">
        <div className="text-2xl font-bold">
          <Link to="/">WordHaven</Link>
        </div>

        <div className="flex gap-[20px] text-base">
          {user && (
            <>
              <Link to={"/create"}> Create a new Blog</Link>
              <a
                onClick={() => {
                  logout;
                }}
              >
                Logout
              </a>
            </>
          )}
          {!user && (
            <>
              <Link to="/login" title="Login">
                Login
              </Link>
              <Link to="/register" title="Register">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
