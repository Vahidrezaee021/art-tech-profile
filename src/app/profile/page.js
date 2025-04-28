"use client";

import { useState, useEffect } from "react";

export default function Profile() {
  const [profileData, setProfileData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // بارگذاری داده‌ها از localStorage
    const data = localStorage.getItem("profileData");
    if (data) {
      setProfileData(JSON.parse(data));
    }
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!profileData.name) {
    return <div>No Profile Data Available</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-8">
      <div className="flex items-center mb-6">
        {profileData.image && (
          <img
            src={profileData.image}
            alt="Profile Image"
            className="w-24 h-24 rounded-full border-4 border-gray-300 mr-4"
          />
        )}
        <h1 className="text-3xl font-bold text-gray-900">{profileData.name}</h1>
      </div>
      <p className="text-lg text-gray-700 mb-4">{profileData.bio}</p>
      <p className="text-md text-gray-600 font-semibold">{profileData.category}</p>
    </div>
  );
}
