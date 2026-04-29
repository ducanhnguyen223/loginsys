"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import { LogoutButton } from "./LogoutButton";

export function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="bg-white shadow">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          LoginSys
        </Link>

        <div className="flex gap-4 items-center">
          {session ? (
            <>
              <Link href="/profile" className="text-gray-700 hover:text-blue-600">
                Profile
              </Link>
              <Link href="/dashboard" className="text-gray-700 hover:text-blue-600">
                Dashboard
              </Link>
              <LogoutButton />
            </>
          ) : (
            <Link
              href="/auth/login"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
