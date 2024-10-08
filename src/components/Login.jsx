import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberPassword, setRememberPassword] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip",
        {
          username,
          password,
        }
      );
      const { token } = response.data;
      localStorage.setItem("token", token);
      navigate("/dashboard", { replace: true }); // Redirect to the dashboard
    } catch (err) {
      setError("Invalid username or password");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#0a192f] pt-40 pb-6">
      <div className="flex shadow-2xl mt-40">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center p-20 gap-8 bg-white rounded-2xl"
        >
          <h1 className="text-5xl font-bold">Welcome</h1>
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
            <div className="flex items-center mt-2">
              <input
                type="checkbox"
                id="remember-password"
                checked={rememberPassword}
                onChange={(e) => setRememberPassword(e.target.checked)}
                className="mr-2"
              />
              <label htmlFor="remember-password" className="text-base">
                Remember Password
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="px-10 py-2 text-2xl rounded-md bg-black text-white"
          >
            Login
          </button>
          <p className="font-semibold">
            Don't have an account?{" "}
            <a href="/register" className="text-blue-400 hover:underline">
              Register
            </a>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
