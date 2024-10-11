import ProductForm from "../components/ProductForm";
import { useProduct } from "../hooks/useProduct";

export default function ProductEdit() {
  const { handleEdit } = useProduct();

  return (
    <div>
      <h1>ProductEdit</h1>
      <ProductForm onSubmit={handleEdit} />
    </div>
  );
}
