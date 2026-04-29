"use client";

import { signIn } from "next-auth/react";

export const dynamic = "force-dynamic";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white rounded-lg shadow p-8">
        <h1 className="text-2xl font-bold mb-6 text-center">Register</h1>
        <p className="text-gray-600 mb-6 text-center">
          Sign up with your GitHub or Google account
        </p>
        <div className="space-y-4">
          <button
            onClick={() => signIn("github", { redirectTo: "/dashboard" })}
            className="w-full px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800"
          >
            Sign up with GitHub
          </button>
          <button
            onClick={() => signIn("google", { redirectTo: "/dashboard" })}
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Sign up with Google
          </button>
        </div>
      </div>
    </div>
  );
}
