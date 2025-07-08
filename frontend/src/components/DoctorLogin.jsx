// import axios from "axios";
// import { useState } from "react";
// import { toast } from "react-toastify";

// const DoctorLogin = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = async () => {
//     try {
//       const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/doctor/login`, {
//         email,
//         password,
//       });

//       const data = response.data;

//       if (data.success) {
//         localStorage.setItem("dtoken", data.token); // ✅ save doctor token
//         toast.success("Login successful!");
//         window.location.href = "/doctor/profile"; // ✅ redirect to doctor panel
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error("Login failed. Try again.");
//     }
//   };

//   return (
//     <div>
//       <h2>Doctor Login</h2>
//       <input
//         type="email"
//         placeholder="Doctor Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Doctor Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// };

// export default DoctorLogin;
