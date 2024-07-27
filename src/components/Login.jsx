import React from "react";

const Login = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#0a192f] pt-40 pb-6">
      <div className="flex shadow-2xl mt-40">
        <div className="flex flex-col items-center justify-center p-20 gap-8 bg-white rounded-2xl ">
          <h1 className="text-5xl font-bold ">Welcome</h1>
          <div className="flex flex-col text-2xl text-left gap-1">
            <span>Username</span>
            <input
              type="text"
              className="rounded-md p-1 border-2 outline-none focus:border-cyan-400 focus:bg-slate-50"
            />
          </div>
          <div className="flex flex-col text-2xl text-left gap-1">
            <span>Password</span>
            <input
              type="password"
              className="rounded-md p-1 border-2 outline-none focus:border-cyan-400 focus
            bg-slate-50"
            />
            <div className="flex">
              <input type="checkbox" />
              <span className="text-base">Remember Password</span>
            </div>
          </div>
          <button className="px-10 py-2 text-2xl rounded-md bg-black text-white">
            Login
          </button>
          <p className="font-semibold">
            Don't have an account?{" "}
            <a href="register" className="text-blue-400 hover:underline">
              Register
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
