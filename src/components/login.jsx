import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <div className="w-full py-10 px-5 flex justify-center flex-col items-center m-auto border gap-5">
        <div className="flex flex-col gap-5 w-full items-center">
          <div className="text-3xl font-semibold">
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

            <div className="items-left flex justify-start text-left w-full">
              <input type="checkbox" required />
              <label>Accept all the terms and conditions</label>
            </div>
            <div className="">
              <button
                className="px-10 py-2 text-base font-semibold border border-black rounded hover:bg-stone-400"
                id="registration"
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
