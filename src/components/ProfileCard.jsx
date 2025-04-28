"use client";  // این خط را اضافه کنید

import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function ProfileCard() {
  const router = useRouter();
  const { query } = router;
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // اگر query.profile موجود است، داده‌ها را بارگذاری می‌کنیم
    if (query?.profile) {
      try {
        const data = JSON.parse(query.profile);
        setProfileData(data);
      } catch (error) {
        console.error("Error parsing profile data:", error);
      }
    }
    setLoading(false);
  }, [query]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!profileData) {
    return <div>No Profile Data Available</div>;
  }

  return (
    <div className="container mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <div className="text-center mb-6">
        <h1 className="text-4xl font-semibold">{profileData.name}</h1>
        <p className="text-lg text-gray-600">{profileData.bio}</p>
        <p className="text-sm text-gray-500">{profileData.category}</p>
      </div>
      {profileData.image && (
        <div className="flex justify-center">
          <img
            src={profileData.image}
            alt="Profile Image"
            className="rounded-full w-32 h-32 object-cover"
          />
        </div>
      )}
    </div>
  );
}
