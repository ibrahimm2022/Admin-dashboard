import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, min: 3, max: 30 },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    address: String,
    avatar: {
      type: String,
      default:
        "https://res.cloudinary.com/dogq2aufr/image/upload/v1713765664/noavatar_gpjjab.png",
    },
    role: { type: String, default: "user" },
    isActive: { type: Boolean, default: false },
    phone: String,
  },
  { timestamps: true }
);

export const User = mongoose.models.user || mongoose.model("user", userSchema);
