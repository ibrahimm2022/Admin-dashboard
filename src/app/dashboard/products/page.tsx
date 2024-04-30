import Pagination from "@/components/dashboard/Pagination";
import Search from "@/components/dashboard/Search";
import { deleteProduct } from "@/lib/actions";
import { getProducts } from "@/lib/data";
import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ProductsPage = async ({
  searchParams,
}: {
  searchParams: { q: string; page: string };
}) => {
  const { products, count } = await getProducts(
    searchParams.q,
    parseInt(searchParams.page)
  );
  return (
    <div className="bg-bg-soft py-2 px-3 rounded-lg">
      <div className=" flex justify-between items-center bg-soft py-2 px-3 rounded-lg   ">
        <Search />
        <Link
          href={"/dashboard/products/add"}
          className="bg-burbile rounded-lg py-1 px-3 flex gap-1 w-fit items-center text-sm"
        >
          <Plus className="w-4" />
          New
        </Link>
      </div>
      <table className="w-full mt-5">
        <thead className="text-sm">
          <tr>
            <th className="text-start py-2">Title</th>
            <th className="text-start py-2">Desription</th>
            <th className="text-start py-2">Price ($)</th>
            <th className="text-start py-2">Stock</th>
            <th className="text-start py-2">Created At</th>
            <th className="text-start py-2">Action</th>
          </tr>
        </thead>
        <tbody className="text-xs">
          {products?.map((product: any) => (
            <tr key={product._id}>
              <td className="flex gap-2 items-center py-2">
                <Image
                  src={product.media[0] || "/noproduct.jpg"}
                  alt="product"
                  width={150}
                  height={150}
                  className="w-6 h-6 object-fill rounded-full"
                />
                {product.title}
              </td>
              <td className="py-2 ">
                <p className="px-2 w-[230px] line-clamp-2">{product.desc}</p>
              </td>
              <td className="py-2">{product.price}</td>
              <td className="py-2">{product.stock}</td>
              <td className="py-2">
                {product.createdAt.toString().slice(4, 15)}
              </td>
              <td className="flex gap-2 py-2">
                <Link
                  href={`/dashboard/products/${product._id}`}
                  className="py-1 px-2 rounded-lg bg-[#afd6ee75]"
                >
                  View
                </Link>
                <form action={deleteProduct}>
                  <input type="hidden" name="id" value={product._id} />
                  <button className="py-1 px-2 rounded-lg bg-red-700">
                    Delete
                  </button>
                </form>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination items={count} />
    </div>
  );
};

export default ProductsPage;
