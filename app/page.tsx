import Link from "next/link";
import { auth } from "@/lib/auth";

export const dynamic = "force-dynamic";

export default async function Home() {
  const session = await auth();

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">DevProfile</h1>
        <p className="text-xl text-gray-600 mb-8">
          Showcase your GitHub profile with style
        </p>
        <div className="flex gap-4 justify-center">
          {session ? (
            <>
              <Link
                href="/dashboard"
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Dashboard
              </Link>
              <Link
                href={`/profile/${session.user?.email?.split("@")[0]}`}
                className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                View Profile
              </Link>
            </>
          ) : (
            <>
              <Link
                href="/auth/login"
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Login
              </Link>
              <Link
                href="/auth/register"
                className="px-8 py-3 bg-gray-200 text-gray-900 rounded-lg hover:bg-gray-300"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
