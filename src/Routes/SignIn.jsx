import React, { useState } from "react";
import { AiFillLock, AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate;
  const { signIn } = UserAuth();

  // the Navigate to destination is not working properly the iniatial cmd "navigate ('/account)" isnt working either
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(" ");
    try {
      await signIn(email, password);
      return <Navigate to="/account" />;
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <div>
      <div className="max-w-[400px] mx-auto min-h-[600px] px-4 py-20">
        <h1 className="text-2xl font-bold">Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="my-4">
            <label>Email</label>
            <div className="my-2 w-full relative rounded-2xl shadow-xl ">
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 bg-primary border border-input rounded-2xl"
                type="email"
              />
              <AiOutlineMail className="absolute right-2 top-3 text-gray-400" />
            </div>
          </div>
          <div className="my-4">
            <label>Password</label>
            <div className="my-2 w-full relative rounded-2xl shadow-xl ">
              <input
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 bg-primary border border-input rounded-2xl"
                type="Password"
              />
              <AiFillLock className="absolute right-2 top-3 text-gray-400" />
            </div>
          </div>
          <button className="w-full my-2 p-3 bg-button rounded-2xl shadow-xl">
            Sign In{" "}
          </button>
        </form>
        <p className="my-4">
          Dont have an account?{" "}
          <Link className="text-accent" to="/signup">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
