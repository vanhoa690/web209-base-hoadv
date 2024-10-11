import { useForm } from "react-hook-form";
import { Product } from "../serivces/product";
import { useProduct } from "../hooks/useProduct";
import { useEffect } from "react";

type Props = {
  onSubmit: (values: Product) => void;
};

export default function ProductForm({ onSubmit }: Props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Product>();
  const { handleGetDetail, product } = useProduct();

  useEffect(() => {
    handleGetDetail();
  }, []);

  useEffect(() => {
    if (!product) return;
    reset(product);
  }, [product]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          name
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          {...register("name", { required: "Required" })}
        />
        {errors?.name && (
          <small className="text-danger">{errors.name.message}</small>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          image
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputPassword1"
          {...register("image", { required: "Required" })}
        />
        {errors?.image && (
          <small className="text-danger">{errors.image.message}</small>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          quantity
        </label>
        <input
          type="number"
          className="form-control"
          id="exampleInputPassword1"
          {...register("quantity", {
            required: "Required",
            min: {
              value: 2,
              message: "min > 2",
            },
          })}
        />
        {errors?.quantity && (
          <small className="text-danger">{errors.quantity.message}</small>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          category
        </label>
        <select
          className="form-select"
          aria-label="Default select example"
          {...register("category", { required: "Required" })}
        >
          <option selected>Open this select menu</option>
          <option value="Comics">Comics</option>
          <option value="Legen">Legen</option>
        </select>
        {errors?.category && (
          <small className="text-danger">{errors.category.message}</small>
        )}
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
