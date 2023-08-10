import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  async function Login(e) {
    // e.preventDefault()
    const res = await fetch("http://localhost:4000/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    console.log(res);
    if (res.ok) {
      setRedirect(true);
      toast.success("login success");
    } else {
      toast.error("Wrong credentials");
    }
  }
  if (redirect) {
    return <Navigate to={"/"} />;
  }
  return (
    <>
      <div className="w-full py-10 px-5 flex justify-center flex-col items-center m-auto border gap-5 max-w-lg md:max-w-xl">
        <div className="flex flex-col gap-5 w-full items-center">
          <div className="text-xl md:text-3xl font-semibold">
            <h1>LOGIN</h1>
          </div>
          <div className="w-full flex flex-col gap-5 items-center">
            <div className="w-full">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-2 py-2 border-b-2"
              />
            </div>
            <div className="w-full">
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className="w-full px-2 py-2 border-b-2"
              />
            </div>

            <div className="">
              <button
                className="px-10 py-2 text-base font-semibold border border-black rounded hover:bg-stone-400"
                id="login"
                onClick={(e) => {
                  Login();
                }}
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="bottom-right" />
    </>
  );
};

export default Login;
