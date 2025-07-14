import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { backendUrl, token, setToken } = useContext(AppContext);
  const navigate = useNavigate();

  const [state, setState] = useState("Sign Up");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const url = state === "Sign Up" ? "/register" : "/login";
      const payload = state === "Sign Up" ? { name, email, password } : { email, password };
      const { data } = await axios.post(`${backendUrl}/api/user${url}`, payload);

      if (data.success) {
        localStorage.setItem("token", data.token);
        setToken(data.token);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) navigate("/");
  }, [token]);

  return (
    <div className="flex items-center justify-center min-h-[80vh] bg-[#f9f9f9] px-4">
      <form
        onSubmit={onSubmitHandler}
        className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl"
      >
        <h2 className="text-3xl font-bold text-center text-[#007BBA] mb-2">
          {state === "Sign Up" ? "Create Account" : "Login"}
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Please {state === "Sign Up" ? "sign up" : "log in"} to book an appointment.
        </p>

        {state === "Sign Up" && (
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-[#007BBA]">Full Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#F7931E] outline-none"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
          </div>
        )}

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1 text-[#007BBA]">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#F7931E] outline-none"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-1 text-[#007BBA]">Password</label>
          <input
            type="password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#F7931E] outline-none"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#007BBA] hover:bg-[#006aa3] text-white py-2 rounded-md transition font-medium text-lg"
        >
          {state === "Sign Up" ? "Create Account" : "Login"}
        </button>

        <div className="text-center mt-5 text-sm text-gray-700">
          {state === "Sign Up" ? (
            <>
              Already have an account?{" "}
              <span
                onClick={() => setState("Login")}
                className="text-[#F7931E] hover:underline cursor-pointer font-medium"
              >
                Login here
              </span>
            </>
          ) : (
            <>
              New here?{" "}
              <span
                onClick={() => setState("Sign Up")}
                className="text-[#F7931E] hover:underline cursor-pointer font-medium"
              >
                Create an account
              </span>
            </>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
