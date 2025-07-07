import React, { useContext, useState } from "react";
import { AdminContext } from "../Context/AdminContext";
import { DoctorContext } from "../Context/DoctorContext";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const [state, setState] = useState("Admin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setAToken, backendUrl } = useContext(AdminContext);
  const { setDToken } = useContext(DoctorContext);

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      if (state === "Admin") {
        const { data } = await axios.post(backendUrl + "/api/admin/login", {
          email,
          password,
        });
        if (data.success) {
          localStorage.setItem("aToken", data.token);
          setAToken(data.token);
        } else {
          toast.error(data.message);
        }
      } else {
        const { data } = await axios.post(backendUrl + "/api/doctor/login", {
          email,
          password,
        });
        if (data.success) {
          localStorage.setItem("dToken", data.token);
          setDToken(data.token);
        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {
      toast.error("Login failed");
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="min-h-[80vh] flex items-center justify-center bg-[#F4F7FA]"
    >
      <div className="flex flex-col gap-4 bg-white m-auto items-start p-8 min-w-[340px] sm:min-w-[400px] border border-[#0072BC] rounded-xl shadow-xl text-[#1E1E1E] text-sm">
        <p className="text-3xl font-bold m-auto text-[#0072BC]">
          {state} Login
        </p>

        {/* Email */}
        <div className="w-full">
          <label className="text-sm font-medium mb-1 block">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="border border-gray-300 rounded w-full p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-[#0072BC]"
            type="email"
            required
          />
        </div>

        {/* Password */}
        <div className="w-full">
          <label className="text-sm font-medium mb-1 block">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="border border-gray-300 rounded w-full p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-[#0072BC]"
            type="password"
            required
          />
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="bg-[#0072BC] hover:bg-[#005a96] text-white w-full px-4 py-2 rounded-md text-base font-semibold transition"
        >
          Login
        </button>

        {/* Toggle Login Type */}
        <p className="text-sm text-center w-full mt-2">
          {state === "Admin" ? (
            <>
              Doctor Login?{" "}
              <span
                className="text-[#F6A637] underline cursor-pointer font-medium"
                onClick={() => setState("Doctor")}
              >
                Click here
              </span>
            </>
          ) : (
            <>
              Admin Login?{" "}
              <span
                className="text-[#F6A637] underline cursor-pointer font-medium"
                onClick={() => setState("Admin")}
              >
                Click here
              </span>
            </>
          )}
        </p>
      </div>
    </form>
  );
};

export default Login;
