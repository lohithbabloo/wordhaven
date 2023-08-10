import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");

  async function Registration(e) {
    e.preventDefault();
    if (password === confirmpassword) {
      const res = await fetch("http://localhost:4000/register", {
        method: "POST",
        body: JSON.stringify({ name, email, password }),
        headers: { "Content-Type": "application/json" },
      });
      if (res.status === 200) {
        toast.success("Success");
      } else {
        toast.error("Something went wrong, Please try again later");
      }
    } else {
      alert("Please recheck your password");
    }
  }

  return (
    <>
      <div className="w-full py-10 px-5 flex justify-center flex-col items-center m-auto border gap-5">
        <div className="flex flex-col gap-5 w-full items-center border-b-2">
          <div className="text-3xl font-semibold">
            <h1>Registration</h1>
          </div>
          <div className="w-full flex flex-col gap-5 items-center">
            <div className="w-full">
              <input
                type="text"
                value={name}
                placeholder="Enter your name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                className="w-full px-3 py-2 border-b-2"
              />
            </div>
            <div className="w-full">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border-b-2"
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
                className="w-full px-3 py-2 border-b-2"
              />
            </div>
            <div className="w-full">
              <input
                type="password"
                placeholder="Re-enter your password"
                value={confirmpassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
                className="w-full px-3 py-2 border-b-2"
              />
            </div>

            <div className="">
              <button
                onClick={Registration}
                className="px-10 py-2 text-base font-semibold border border-black rounded mb-5 hover:bg-stone-400"
                id="registration"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="w-full">
            <button className="flex items-center justify-center gap-2 w-full border border-black rounded px-10 py-2 hover:bg-stone-400 transistion duration-200 ">
              <p>Continue with GOOGLE</p>
              <img src="/public/image3.png" height={25} width={25}></img>
            </button>
          </div>
          <div className="w-full">
            <button className="flex items-center justify-center w-full border border-black rounded px-8 py-2 hover:bg-stone-400 transistion duration-200 ">
              <p>Continue with FACEBOOK</p>
              <img src="/public/image4.png" height={40} width={40}></img>
            </button>
          </div>
        </div>
      </div>
      <ToastContainer position="bottom-right" newestOnTop />
    </>
  );
};

export default Register;
