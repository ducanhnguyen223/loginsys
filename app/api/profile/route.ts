import { auth } from "@/lib/auth";
import { connectDB } from "@/lib/db";
import { Profile } from "@/lib/models/profile";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await auth();

  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    await connectDB();
    const profile = await Profile.findOne({ user: session.user.id });
    return NextResponse.json(profile);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch profile" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  const session = await auth();

  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    await connectDB();
    const data = await req.json();

    const profile = await Profile.findOneAndUpdate(
      { user: session.user.id },
      data,
      { new: true, upsert: true }
    );

    return NextResponse.json(profile);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update profile" },
      { status: 500 }
    );
  }
}
