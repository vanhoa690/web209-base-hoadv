import AuthForm from "../components/AuthForm";
import { useAuth } from "../hooks/useAuth";

export default function Register() {
  const { handleRegister } = useAuth();
  return (
    <div>
      <h1>Register</h1>
      <AuthForm onSubmit={handleRegister} />
    </div>
  );
}
