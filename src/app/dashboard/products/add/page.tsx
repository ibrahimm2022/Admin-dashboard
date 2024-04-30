import { addProduct } from "@/lib/actions";

const AddProductPage = () => {
  return (
    <form action={addProduct} className="bg-bg-soft py-4 rounded-lg px-3 flex flex-wrap justify-between">
      <input
        type="text"
        placeholder="Title"
        name="title"
        required
        className="w-[45%] mb-5 py-3 px-4 border-[#23374a] bg-primary border-2 focus-visible:outline-none text-sm  "
      />
      <select
        name="category"
        id="cat"
        className="w-[45%] mb-5 py-3 px-4 border-[#23374a] bg-primary border-2 focus-visible:outline-none text-sm  "
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
        <option value="phone" className="bg-primary py-2 px-3 border-[#23374a]">
          Phone
        </option>
        <option
          value="computer"
          className="bg-primary py-2 px-3 border-[#23374a]"
        >
          Computer
        </option>
      </select>
      <input
        type="number"
        placeholder="Price"
        name="price"
        required
        className="w-[45%] mb-5 py-3 px-4 border-[#23374a] bg-primary border-2 focus-visible:outline-none text-sm  "
      />
      <input
        type="number"
        placeholder="Stock"
        name="stock"
        required
        className="w-[45%] mb-5 py-3 px-4 border-[#23374a] bg-primary border-2 focus-visible:outline-none text-sm  "
      />
      <input
        type="text"
        placeholder="Color"
        name="color"
        required
        className="w-[45%] mb-5 py-3 px-4 border-[#23374a] bg-primary border-2 focus-visible:outline-none text-sm  "
      />
      <input
        type="text"
        placeholder="Size"
        name="size"
        className="w-[45%] mb-5 py-3 px-4 border-[#23374a] bg-primary border-2 focus-visible:outline-none text-sm  "
      />
      <textarea
        name="desc"
        id="desc"
        rows={8}
        placeholder="Description"
        className="w-full mb-5 py-3 px-4 border-[#23374a] bg-primary border-2 focus-visible:outline-none text-sm  "
      ></textarea>
      <button
        type="submit"
        className="w-full py-2 text-center border-[#23374a] bg-teal-600"
      >
        Submit
      </button>
    </form>
  );
};

export default AddProductPage;
