import { useEffect } from "react";
import { useProduct } from "../hooks/useProduct";
import { Link } from "react-router-dom";

export default function ProductList() {
  const { handleGetAll, products, handleDelete } = useProduct();
  useEffect(() => {
    handleGetAll();
  }, []);
  return (
    <div>
      <h1>ProductList</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">name</th>
            <th scope="col">image</th>
            <th scope="col">quantity</th>
            <th scope="col">category</th>
            <th scope="col">actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <th scope="row">{product.id}</th>
              <td>{product.name}</td>
              <td>{product.image}</td>
              <td>{product.quantity}</td>
              <td>{product.category}</td>
              <td>
                <Link to={`/product/edit/${product.id}`}>
                  <button className="btn btn-info">Edit</button>
                </Link>
                <button
                  onClick={() => handleDelete(product.id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
