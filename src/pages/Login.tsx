import AuthForm from "../components/AuthForm";
import { useAuth } from "../hooks/useAuth";

export default function Login() {
  const { handleLogin } = useAuth();

  return (
    <div>
      <h1>Login</h1>
      <AuthForm onSubmit={handleLogin} />
    </div>
  );
}
