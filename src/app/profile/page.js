"use client";

import { useSearchParams } from "next/navigation";

export default function Profile() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const specialty = searchParams.get("specialty");
  const bio = searchParams.get("bio");
  const image = searchParams.get("image");

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gradient-to-br from-gray-50 to-gray-200">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">{name || "No Name"}</h2>
        <h4 className="text-xl text-gray-600 mb-6">{specialty || "No Specialty"}</h4>
        <p className="text-gray-700 mb-6">{bio || "No Bio provided."}</p>
        {image && (
          <img
            src={image}
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto"
          />
        )}
      </div>
    </main>
  );
}
