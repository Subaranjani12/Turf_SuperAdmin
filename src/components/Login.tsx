import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/Logo.png";
import { loginCredentials } from "../data/dashboardData";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      username === loginCredentials.username &&
      password === loginCredentials.password
    ) {
      // Save login state (for protected routing later)
      localStorage.setItem("isLoggedIn", "true");

      // Redirect to dashboard
      navigate("/dashboard");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* LEFT IMAGE SECTION */}
      <div className="w-1/2 flex items-center justify-center bg-white">
        <img
          src={logo}
          alt="Sportzy"
          className="max-w-[80%] h-auto"
        />
      </div>

      {/* RIGHT LOGIN SECTION */}
      <div className="w-1/2 bg-[#2f2f2f] flex items-center justify-center">
        <form
          onSubmit={handleLogin}
          className="w-[400px] bg-[#3a3a3a] p-10 rounded-xl shadow-lg"
        >
          <h2 className="text-white text-2xl font-semibold text-center mb-8">
            Super Admin Login
          </h2>

          {/* ERROR MESSAGE */}
          {error && (
            <p className="text-red-400 text-center mb-4">
              {error}
            </p>
          )}

          {/* USERNAME */}
          <div className="mb-5">
            <label className="block text-white mb-2">Username</label>
            <input
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 rounded-md bg-[#5a5a5a] text-white placeholder-gray-300 outline-none"
              required
            />
          </div>

          {/* PASSWORD */}
          <div className="mb-8">
            <label className="block text-white mb-2">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-md bg-[#5a5a5a] text-white placeholder-gray-300 outline-none"
              required
            />
          </div>

          {/* LOGIN BUTTON */}
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-md transition"
          >
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
