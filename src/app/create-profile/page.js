"use client";  // این دستور را اضافه کنید

import { useState } from "react";
import { useRouter } from "next/navigation";  // از این hook استفاده می‌کنید

export default function CreateProfile() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    bio: "",
    category: "",
  });

  const router = useRouter();  // استفاده از useRouter

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragActive(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);
    const file = e.dataTransfer.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // برای آینده: ذخیره در دیتابیس
    console.log({
      ...formData,
      image: selectedImage,
    });
  
    // پس از ذخیره، به صفحه پروفایل منتقل شو
    const query = new URLSearchParams({
      profile: JSON.stringify({ ...formData, image: selectedImage }),
    }).toString();
  
    // اصلاح استفاده از router.push
    router.push(`/profile?${query}`); // مسیر باید به صورت رشته باشد
  
    alert("Profile Saved Successfully!");
  };
  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 w-full max-w-md bg-white rounded-xl p-8 shadow-md"
      >
        <div
          className={`border-4 ${
            dragActive ? "border-blue-400" : "border-dashed border-gray-300"
          } rounded-xl p-6 transition-all`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <label
            htmlFor="imageUpload"
            className="flex flex-col items-center justify-center cursor-pointer"
          >
            {selectedImage ? (
              <img
                src={selectedImage}
                alt="Selected"
                className="object-cover w-32 h-32 rounded-full mb-4"
              />
            ) : (
              <div className="flex flex-col items-center">
                <svg
                  className="w-12 h-12 text-gray-400 mb-2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 16V4h10v12m-5-4v8m0 0h-4m4 0h4"
                  />
                </svg>
                <p className="text-gray-500 text-sm">Drag & Drop or Click to Upload</p>
              </div>
            )}
            <input
              id="imageUpload"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </label>
        </div>

        <input
          type="text"
          name="name"
          placeholder="Artist Name"
          value={formData.name}
          onChange={handleInputChange}
          className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-blue-500"
          required
        />

        <textarea
          name="bio"
          placeholder="Short Bio"
          value={formData.bio}
          onChange={handleInputChange}
          className="border border-gray-300 rounded-lg p-3 h-24 focus:outline-none focus:border-blue-500"
          required
        />

        <select
          name="category"
          value={formData.category}
          onChange={handleInputChange}
          className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-blue-500"
          required
        >
          <option value="">Select Category</option>
          <option value="Painting">Painting</option>
          <option value="Photography">Photography</option>
          <option value="Sculpture">Sculpture</option>
          <option value="Digital Art">Digital Art</option>
          <option value="Other">Other</option>
        </select>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg shadow transition"
        >
          Save Profile
        </button>
      </form>
    </div>
  );
}
