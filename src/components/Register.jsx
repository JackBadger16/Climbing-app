import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const history = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      await axios.post(
        "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip",
        {
          username,
          password,
        }
      );
      history.push("/login"); // Redirect to login page after successful registration
    } catch (err) {
      setError("Error registering user");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#0a192f] pt-40 pb-6">
      <div className="flex shadow-2xl mt-40">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center p-20 gap-8 bg-white rounded-2xl"
        >
          <h1 className="text-5xl font-bold">Register</h1>
          {error && <p className="text-red-500">{error}</p>}
          <div className="flex flex-col text-2xl text-left gap-1">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="rounded-md p-1 border-2 outline-none focus:border-cyan-400 focus:bg-slate-50"
            />
          </div>
          <div className="flex flex-col text-2xl text-left gap-1">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="rounded-md p-1 border-2 outline-none focus:border-cyan-400 focus:bg-slate-50"
            />
          </div>
          <div className="flex flex-col text-2xl text-left gap-1">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="rounded-md p-1 border-2 outline-none focus:border-cyan-400 focus:bg-slate-50"
            />
          </div>
          <button
            type="submit"
            className="px-10 py-2 text-2xl rounded-md bg-black text-white"
          >
            Register
          </button>
          <p className="font-semibold">
            Already have an account?{" "}
            <a href="/login" className="text-blue-400 hover:underline">
              Login
            </a>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Register;
