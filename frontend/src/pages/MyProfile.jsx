import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import axios from "axios";
import { toast } from "react-toastify";

const MyProfile = () => {
  const { userData, setUserData, token, backendUrl, loadUserProfileData } = useContext(AppContext);
  const [isEdit, setIsEdit] = useState(false);
  const [image, setImage] = useState(false);

  const updateUserProfileData = async () => {
    try {
      const formData = new FormData();
      formData.append("name", userData.name);
      formData.append("phone", userData.phone);
      formData.append("address", JSON.stringify(userData.address));
      formData.append("gender", userData.gender);
      formData.append("dob", userData.dob);
      if (image) formData.append("image", image);

      const { data } = await axios.post(
        backendUrl + "/api/user/update-profile",
        formData,
        { headers: { token } }
      );

      if (data.success) {
        toast.success(data.message);
        await loadUserProfileData();
        setIsEdit(false);
        setImage(false);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    userData && (
      <div className="max-w-lg flex flex-col gap-4 text-sm mx-auto bg-white p-6 rounded-xl shadow-md mt-10">
        {isEdit ? (
          <label htmlFor="image">
            <div className="inline-block relative cursor-pointer">
              <img
                className="w-36 h-36 object-cover rounded-lg opacity-80"
                src={image ? URL.createObjectURL(image) : userData.image}
                alt="user"
              />
              <img
                className="w-8 absolute bottom-2 right-2"
                src={assets.upload_icon}
                alt="upload"
              />
            </div>
            <input
              type="file"
              id="image"
              hidden
              onChange={(e) => setImage(e.target.files[0])}
            />
          </label>
        ) : (
          <img className="w-36 h-36 object-cover rounded-lg" src={userData.image} alt="user" />
        )}

        {isEdit ? (
          <input
            type="text"
            value={userData.name}
            onChange={(e) => setUserData((prev) => ({ ...prev, name: e.target.value }))}
            className="text-2xl font-semibold text-[#007BBA] bg-gray-100 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F7931E]"
          />
        ) : (
          <p className="text-2xl font-semibold text-[#007BBA]">{userData.name}</p>
        )}

        <hr className="my-4 border-t border-gray-300" />

        <div>
          <h3 className="text-[#007BBA] font-medium mb-2 underline">Contact Information</h3>
          <div className="grid grid-cols-[100px_1fr] gap-y-3 text-gray-800">
            <span className="font-medium">Email:</span>
            <span className="text-blue-500">{userData.email}</span>

            <span className="font-medium">Phone:</span>
            {isEdit ? (
              <input
                type="text"
                value={userData.phone}
                onChange={(e) => setUserData((prev) => ({ ...prev, phone: e.target.value }))}
                className="bg-gray-100 px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-[#007BBA]"
              />
            ) : (
              <span>{userData.phone}</span>
            )}

            <span className="font-medium">Address:</span>
            {isEdit ? (
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  value={userData.address.line1}
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      address: { ...prev.address, line1: e.target.value },
                    }))
                  }
                  className="bg-gray-100 px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-[#007BBA]"
                />
                <input
                  type="text"
                  value={userData.address.line2}
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      address: { ...prev.address, line2: e.target.value },
                    }))
                  }
                  className="bg-gray-100 px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-[#007BBA]"
                />
              </div>
            ) : (
              <span>
                {userData.address.line1} <br /> {userData.address.line2}
              </span>
            )}
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-[#007BBA] font-medium mb-2 underline">Basic Information</h3>
          <div className="grid grid-cols-[100px_1fr] gap-y-3 text-gray-800">
            <span className="font-medium">Gender:</span>
            {isEdit ? (
              <select
                value={userData.gender}
                onChange={(e) => setUserData((prev) => ({ ...prev, gender: e.target.value }))}
                className="bg-gray-100 px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-[#007BBA]"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            ) : (
              <span>{userData.gender}</span>
            )}

            <span className="font-medium">DOB:</span>
            {isEdit ? (
              <input
                type="date"
                value={userData.dob}
                onChange={(e) => setUserData((prev) => ({ ...prev, dob: e.target.value }))}
                className="bg-gray-100 px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-[#007BBA]"
              />
            ) : (
              <span>{userData.dob}</span>
            )}
          </div>
        </div>

        <div className="mt-8">
          {isEdit ? (
            <button
              onClick={updateUserProfileData}
              className="bg-[#007BBA] hover:bg-[#F7931E] text-white px-6 py-2 rounded-full transition font-medium"
            >
              Save Information
            </button>
          ) : (
            <button
              onClick={() => setIsEdit(true)}
              className="bg-[#007BBA] hover:bg-[#F7931E] text-white px-6 py-2 rounded-full transition font-medium"
            >
              Edit
            </button>
          )}
        </div>
      </div>
    )
  );
};

export default MyProfile;
