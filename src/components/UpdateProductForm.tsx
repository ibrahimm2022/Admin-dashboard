"use client";
import { updateProduct } from "@/lib/actions";
import Image from "next/image";
import { useState } from "react";
import UploadImage from "./UploadImage";

const UpdateProductForm = ({ product }: { product: ProductType }) => {
  const [media, setMedia] = useState<[any]>(product.media);
  const [selectedImage, setSelectedImage] = useState<string>(product.media[0]);
  console.log(media);

  const handleAction = (formData) => {
    const data = updateProduct(formData, media);
  };
  return (
    <div className="grid grid-cols-12 gap-5 flex-wrap">
      <div className="col-span-4 p-3 bg-bg-soft rounded-lg h-fit max-lg:col-span-12 ">
        <div className="flex  flex-col gap-1 mb-3">
          <Image
            src={selectedImage}
            alt="Prodcut img"
            width={200}
            height={400}
            className="w-full h-[250px] object-contain rounded-lg "
          />
          <div className="grid grid-cols-4 justify-between">
            {media.map((image: string, indx) => (
              <Image
                onClick={() => setSelectedImage(image)}
                key={indx}
                src={image}
                alt="product Image"
                width={200}
                height={200}
                className={`w-12 h-12 object-contain cursor-pointer rounded-lg mb-2 ${
                  image === selectedImage && "border-burbile border"
                }`}
              />
            ))}
          </div>
        </div>
        <UploadImage setImage={setMedia} multi={true} item={media} />
      </div>
      <form
        action={handleAction}
        className="col-span-8 flex flex-col gap-2 flex-[8] bg-bg-soft p-3  rounded-lg max-lg:col-span-12"
      >
        <input type="hidden" name="id" value={product._id.toString()} />
        <div className="flex flex-col gap-2">
          <label htmlFor="title" className="text-sm">
            title
          </label>
          <input
            type="text"
            id="title"
            placeholder={product?.title}
            name="title"
            className=" py-3 px-4 border-[#23374a] bg-primary border-2 focus-visible:outline-none text-sm  "
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="cat" className="text-sm">
            Category
          </label>
          <select
            name="category"
            id="cat"
            defaultValue={product?.category}
            className=" mb-5 py-3 px-4 border-[#23374a] bg-primary border-2 focus-visible:outline-none text-sm  "
          >
            <option
              value="general"
              className="bg-primary py-2 px-3 border-[#23374a]"
            >
              Choose a Category
            </option>
            <option
              value="kitchen"
              className="bg-primary py-2 px-3 border-[#23374a]"
            >
              kitchen
            </option>
            <option
              value="phone"
              className="bg-primary py-2 px-3 border-[#23374a]"
            >
              Phone
            </option>
            <option
              value="computer"
              className="bg-primary py-2 px-3 border-[#23374a]"
            >
              Computer
            </option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="price" className="text-sm">
            price
          </label>
          <input
            type="text"
            id="price"
            placeholder={product.price.toString()}
            name="price"
            className=" py-3 px-4 border-[#23374a] bg-primary border-2 focus-visible:outline-none text-sm  "
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="stock" className="text-sm">
            Stock
          </label>
          <input
            type="text"
            id="stock"
            name="stock"
            placeholder={product?.stock.toString()}
            className=" py-3 px-4 border-[#23374a] bg-primary border-2 focus-visible:outline-none text-sm  "
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="color" className="text-sm">
            color
          </label>
          <input
            type="text"
            id="color"
            placeholder={product?.color}
            name="color"
            className=" py-3 px-4 border-[#23374a] bg-primary border-2 focus-visible:outline-none text-sm  "
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="size" className="text-sm">
            Size
          </label>
          <input
            type="text"
            id="size"
            placeholder={product?.size}
            name="size"
            className=" py-3 px-4 border-[#23374a] bg-primary border-2 focus-visible:outline-none text-sm  "
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="desc" className="text-sm">
            description
          </label>
          <textarea
            id="desc"
            placeholder={product?.desc}
            name="desc"
            className=" py-3 px-4 border-[#23374a] bg-primary border-2 focus-visible:outline-none text-sm  "
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 text-center border-[#23374a] bg-teal-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdateProductForm;
