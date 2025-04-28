"use client";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gradient-to-br from-white to-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">
          Welcome to ArtConnect
        </h1>
        <p className="text-lg mb-8 text-gray-600">
          Empowering artists to showcase their talent globally with ease.
        </p>
        <a
          href="/create-profile"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
        >
          Create Your Artist Profile
        </a>
      </div>
    </main>
  );
}
