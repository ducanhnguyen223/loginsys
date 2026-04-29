import mongoose from "mongoose";

const profileSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    slug: { type: String, unique: true, required: true },
    displayName: String,
    bio: String,
    avatar: String,
    github: {
      username: String,
      repos: [
        {
          name: String,
          description: String,
          stars: Number,
          language: String,
          url: String,
        },
      ],
      contributionsCount: Number,
      languages: [String],
      lastSyncedAt: Date,
    },
    google: {
      name: String,
      avatar: String,
    },
    isPublic: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export const Profile =
  mongoose.models.Profile || mongoose.model("Profile", profileSchema);
