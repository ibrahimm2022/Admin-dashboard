import UpdateProductForm from "@/components/UpdateProductForm";
import { getProduct } from "@/lib/data";

const ProductDetails = async ({ params }: { params: { id: string } }) => {
  const data = await getProduct(params.id);
  const product = await JSON.parse(data);
  return <UpdateProductForm product={product} />;
};

export default ProductDetails;
