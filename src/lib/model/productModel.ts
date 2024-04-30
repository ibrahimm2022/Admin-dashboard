import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, uniqe: true, min: 3, max: 100 },
    desc: { type: String, required: true, min: 3, max: 500 },
    media: {
      type: [String],
      required: true,
      default: [
        "https://res.cloudinary.com/dogq2aufr/image/upload/v1713892424/noproduct_zc9fmj.jpg",
      ],
    },
    category: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    stock: { type: Number, required: true, min: 0 },
    color: { type: String },
    size: { type: String },
  },
  { timestamps: true }
);

export const Product =
  mongoose.models.product || mongoose.model("product", productSchema);
