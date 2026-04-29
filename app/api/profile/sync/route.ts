import { auth } from "@/lib/auth";
import { connectDB } from "@/lib/db";
import { Profile } from "@/lib/models/profile";
import { syncGitHubProfile } from "@/lib/github";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const session = await auth();

  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    await connectDB();

    const { username } = await req.json();

    const githubData = await syncGitHubProfile(
      process.env.GITHUB_TOKEN || "",
      username
    );

    const profile = await Profile.findOneAndUpdate(
      { user: session.user.id },
      {
        github: githubData,
      },
      { new: true }
    );

    return NextResponse.json(profile);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to sync profile" },
      { status: 500 }
    );
  }
}
