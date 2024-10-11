import toast from "react-hot-toast";
import { loginUser, registerUser, User } from "../serivces/auth";
import { useNavigate } from "react-router-dom";

export function useAuth() {
  const nav = useNavigate();
  function handleRegister(values: User) {
    registerUser(values)
      .then(() => {
        toast.success("Done");
        nav("/login");
      })
      .catch(() => toast.error("Error"));
  }
  function handleLogin(values: User) {
    loginUser(values)
      .then(({ data }) => {
        localStorage.setItem("token", data.accessToken);
        toast.success("Done");
        nav("/product/list");
      })
      .catch(() => toast.error("Error"));
  }

  return {
    handleLogin,
    handleRegister,
  };
}
