// import { useEffect, useState } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";

// const DoctorProfile = () => {
//   const [profileData, setProfileData] = useState(null);
//   const backendUrl = import.meta.env.VITE_BACKEND_URL;

//   const fetchDoctorProfile = async () => {
//     try {
//       const { data } = await axios.get(`${backendUrl}/api/doctor/profile`, {
//         headers: {
//           dtoken: localStorage.getItem("dtoken"),
//         },
//       });

//       if (data.success) {
//         setProfileData(data.profileData);
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       toast.error(error.response?.data?.message || "Something went wrong");
//     }
//   };

//   useEffect(() => {
//     fetchDoctorProfile();
//   }, []);

//   if (!profileData) return <p>Loading...</p>;

//   return (
//     <div>
//       <h2>Welcome, Dr. {profileData.name}</h2>
//       <p>Email: {profileData.email}</p>
//       <p>Speciality: {profileData.speciality}</p>
//       <p>Experience: {profileData.experience}</p>
//       <p>Fees: ₹{profileData.fees}</p>
//       {/* Display more info if needed */}
//     </div>
//   );
// };

// export default DoctorProfile;
