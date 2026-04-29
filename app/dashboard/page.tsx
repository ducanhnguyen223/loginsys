import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { LogoutButton } from "@/app/components/LogoutButton";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const session = await auth();

  if (!session) {
    redirect("/auth/login");
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow p-8">
          <h1 className="text-3xl font-bold mb-4">Welcome, {session.user?.name}</h1>
          <p className="text-gray-600 mb-2">Email: {session.user?.email}</p>

          <div className="mt-8 space-y-4">
            <Link
              href="/profile/edit"
              className="inline-block px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Edit Profile
            </Link>
            <LogoutButton />
            <div>
              <p className="text-sm text-gray-500 mt-4">
                Share your public profile with others
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
