"use client";  // این خط را اضافه کنید

import { useRouter } from "next/router";
import { useState } from "react";

export default function Profile() {
  const router = useRouter();
  const { query } = router;

  const profileData = query.profile ? JSON.parse(query.profile) : null;

  if (!profileData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{profileData.name}</h1>
      <p>{profileData.bio}</p>
      <p>{profileData.category}</p>
      {profileData.image && <img src={profileData.image} alt="Profile" />}
    </div>
  );
}
