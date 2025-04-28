"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Profile() {
  const router = useRouter();
  const { query } = router;
  const [profileData, setProfileData] = useState({});
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

  return (
    <div className="profile-container">
      <h1>{profileData.name}</h1>
      <p>{profileData.bio}</p>
      <p>{profileData.category}</p>
      {profileData.image && (
        <img src={profileData.image} alt="Profile Image" />
      )}
    </div>
  );
}
