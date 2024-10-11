import ProductForm from "../components/ProductForm";
import { useProduct } from "../hooks/useProduct";

export default function ProductAdd() {
  const { handleAdd } = useProduct();

  return (
    <div>
      <h1>ProductAdd</h1>
      <ProductForm onSubmit={handleAdd} />
    </div>
  );
}
