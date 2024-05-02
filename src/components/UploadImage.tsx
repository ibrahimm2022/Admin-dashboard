"use client";

import { ImageIcon } from "lucide-react";
import { CldUploadWidget } from "next-cloudinary";
import { Dispatch, SetStateAction } from "react";

interface UploadImageProp {
  setImage: Dispatch<SetStateAction<any[]>>;
  multi?: boolean;
  item?: [any];
}
const UploadImage = ({ setImage, multi, item }: UploadImageProp) => {
  const onUpload = (result: any) => {
    console.log(result);
    if (multi) {
      setImage((prev) => [...item, result.info.secure_url]);
      return;
    }
    setImage(result.info.secure_url);
  };
  return (
    <CldUploadWidget uploadPreset="oma7jxyi" onUpload={onUpload}>
      {({ open }) => {
        return (
          <button
            onClick={(e) => {
              e.preventDefault();
              open();
            }}
            className="flex gap-3"
          >
            <ImageIcon /> Upload Image
          </button>
        );
      }}
    </CldUploadWidget>
  );
};

export default UploadImage;
