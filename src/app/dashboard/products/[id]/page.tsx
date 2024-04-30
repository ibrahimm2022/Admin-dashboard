import { updateProduct } from "@/lib/actions";
import { getProduct } from "@/lib/data";
import Image from "next/image";

const ProductDetails = async ({ params }: { params: { id: string } }) => {
  const product = await getProduct(params.id);

  return (
    <div className="flex gap-5">
      <div className="p-3 bg-bg-soft w-[250px] rounded-lg h-fit">
        <Image
          src={product?.media[0] || "/noproduct.jpg"}
          alt="Prodcut img"
          width={200}
          height={400}
          className="w-full h-[250px] object-cover rounded-lg mb-3"
        />
      </div>
      <form
        action={updateProduct}
        className="flex flex-col gap-2 flex-[8] bg-bg-soft p-3  rounded-lg"
      >
        <input type="hidden" name="id" value={product._id} />
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
            placeholder={product.price}
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
            placeholder={product?.stock}
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

export default ProductDetails;
