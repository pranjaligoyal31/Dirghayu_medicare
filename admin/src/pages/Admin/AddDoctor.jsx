import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { AdminContext } from "../../Context/AdminContext";
import { toast } from "react-toastify";
import axios from "axios";

const AddDoctor = () => {
  const [docImg, SetDocImg] = useState(false);
  const [name, SetName] = useState("");
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [experience, SetExperience] = useState("1 Year");
  const [fees, SetFees] = useState("");
  const [about, SetAbout] = useState("");
  const [speciality, SetSpeciality] = useState("General physician");
  const [degree, SetDegree] = useState("");
  const [address1, SetAddress1] = useState("");
  const [address2, SetAddress2] = useState("");

  const { backendUrl, aToken } = useContext(AdminContext);

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      if (!docImg) {
        return toast.error("Image Not Selected");
      }

      const formData = new FormData();

      formData.append("image", docImg);
      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("experience", experience);
      formData.append("fees", Number(fees));
      formData.append("about", about);
      formData.append("speciality", speciality);
      formData.append("degree", degree);
      formData.append("address", JSON.stringify({ line1: address1, line2: address2 }));

      const { data } = await axios.post(
        backendUrl + "/api/admin/add-doctor",
        formData,
        { headers: { aToken } }
      );

      if (data.success) {
        toast.success(data.message);
        SetDocImg(false);
        SetName("");
        SetEmail("");
        SetPassword("");
        SetFees("");
        SetAbout("");
        SetDegree("");
        SetAddress1("");
        SetAddress2("");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="m-5 w-full">
      <p className="mb-4 text-2xl font-semibold text-[#0072BC]">Add Doctor</p>
      <div className="bg-[#F4F7FA] border border-[#0072BC] rounded-xl px-10 py-8 w-full max-w-5xl max-h-[85vh] overflow-y-auto shadow-md">
        <div className="flex items-center gap-4 mb-8 text-gray-600">
          <label htmlFor="doc-img">
            <img
              className="w-20 h-20 object-cover rounded-full border border-[#0072BC] shadow cursor-pointer"
              src={docImg ? URL.createObjectURL(docImg) : assets.upload_area}
              alt="upload doctor"
            />
          </label>
          <input
            onChange={(e) => SetDocImg(e.target.files[0])}
            type="file"
            id="doc-img"
            hidden
          />
          <p className="text-sm">Upload doctor <br /> picture</p>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-10 text-[#2F2F2F]">
          <div className="w-full lg:flex-1 flex flex-col gap-4">
            {/* Doctor Name */}
            <div className="flex-1 flex flex-col gap-1">
              <p className="text-sm font-semibold">Doctor Name</p>
              <input
                onChange={(e) => SetName(e.target.value)}
                value={name}
                className="border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0072BC] rounded px-3 py-2 transition"
                type="text"
                placeholder="Name"
                required
              />
            </div>

            {/* Email */}
            <div className="flex-1 flex flex-col gap-1">
              <p className="text-sm font-semibold">Doctor Email</p>
              <input
                onChange={(e) => SetEmail(e.target.value)}
                value={email}
                className="border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0072BC] rounded px-3 py-2 transition"
                type="email"
                placeholder="Email"
                required
              />
            </div>

            {/* Password */}
            <div className="flex-1 flex flex-col gap-1">
              <p className="text-sm font-semibold">Doctor Password</p>
              <input
                onChange={(e) => SetPassword(e.target.value)}
                value={password}
                className="border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0072BC] rounded px-3 py-2 transition"
                type="password"
                placeholder="Password"
                required
              />
            </div>

            {/* Experience */}
            <div className="flex-1 flex flex-col gap-1">
              <p className="text-sm font-semibold">Experience</p>
              <select
                onChange={(e) => SetExperience(e.target.value)}
                value={experience}
                className="border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0072BC] rounded px-3 py-2 transition"
              >
                {Array.from({ length: 10 }, (_, i) => (
                  <option key={i} value={`${i + 1} Year`}>
                    {i + 1} Year
                  </option>
                ))}
              </select>
            </div>

            {/* Fees */}
            <div className="flex-1 flex flex-col gap-1">
              <p className="text-sm font-semibold">Fees</p>
              <input
                onChange={(e) => SetFees(e.target.value)}
                value={fees}
                className="border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0072BC] rounded px-3 py-2 transition"
                type="number"
                placeholder="fees"
                required
              />
            </div>
          </div>

          {/* Right column */}
          <div className="w-full lg:flex-1 flex flex-col gap-4">
            {/* Speciality */}
            <div className="flex-1 flex flex-col gap-1">
              <p className="text-sm font-semibold">Speciality</p>
              <select
                onChange={(e) => SetSpeciality(e.target.value)}
                value={speciality}
                className="border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0072BC] rounded px-3 py-2 transition"
              >
                <option value="General physician">General physician</option>
                <option value="Gynecologist">Gynecologist</option>
                <option value="Dermatologist">Dermatologist</option>
                <option value="Pediatricians">Pediatricians</option>
                <option value="Neurologist">Neurologist</option>
                <option value="Gastroenterologist">Gastroenterologist</option>
              </select>
            </div>

            {/* Education */}
            <div className="flex-1 flex flex-col gap-1">
              <p className="text-sm font-semibold">Education</p>
              <input
                onChange={(e) => SetDegree(e.target.value)}
                value={degree}
                className="border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0072BC] rounded px-3 py-2 transition"
                type="text"
                placeholder="Education"
                required
              />
            </div>

            {/* Address */}
            <div className="flex-1 flex flex-col gap-1">
              <p className="text-sm font-semibold">Address</p>
              <input
                onChange={(e) => SetAddress1(e.target.value)}
                value={address1}
                className="border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0072BC] rounded px-3 py-2 transition"
                type="text"
                placeholder="address 1"
                required
              />
              <input
                onChange={(e) => SetAddress2(e.target.value)}
                value={address2}
                className="border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0072BC] rounded px-3 py-2 transition"
                type="text"
                placeholder="address 2"
                required
              />
            </div>
          </div>
        </div>

        {/* About Doctor */}
        <div className="mt-6">
          <p className="mb-2 text-sm font-semibold">About Doctor</p>
          <textarea
            onChange={(e) => SetAbout(e.target.value)}
            value={about}
            className="w-full px-4 pt-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0072BC] rounded transition"
            placeholder="write about doctor"
            rows={4}
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-[#0072BC] hover:bg-[#005a96] px-10 py-3 mt-6 text-white font-medium rounded-full transition duration-300"
        >
          Add Doctor
        </button>
      </div>
    </form>
  );
};

export default AddDoctor;
