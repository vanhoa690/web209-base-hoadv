import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import {
  addProduct,
  deleteProduct,
  editProduct,
  getAll,
  getDetail,
  Product,
} from "../serivces/product";
import { useState } from "react";

export function useProduct() {
  const [products, setProducts] = useState<Product[]>([]);
  const [product, setProduct] = useState<Product>();

  const nav = useNavigate();
  const { id } = useParams();
  function handleAdd(values: Product) {
    addProduct(values)
      .then(() => {
        toast.success("Done");
        nav("/product/list");
      })
      .catch(() => toast.error("Error"));
  }
  function handleEdit(values: Product) {
    if (!id) return;
    editProduct(id, values)
      .then(() => {
        toast.success("Done");
        nav("/product/list");
      })
      .catch(() => toast.error("Error"));
  }

  function handleDelete(id: string) {
    if (confirm("xoas")) {
      deleteProduct(id)
        .then(() => {
          toast.success("Done");
          location.reload();
        })
        .catch(() => toast.error("Error"));
    }
  }
  function handleGetAll() {
    getAll()
      .then(({ data }) => {
        setProducts(data);
        toast.success("Done");
      })
      .catch(() => toast.error("Error"));
  }
  function handleGetDetail() {
    if (!id) return;
    getDetail(id)
      .then(({ data }) => {
        setProduct(data);
        toast.success("Done");
      })
      .catch(() => toast.error("Error"));
  }
  return {
    handleAdd,
    handleEdit,
    handleDelete,
    handleGetAll,
    handleGetDetail,
    product,
    products,
  };
}
