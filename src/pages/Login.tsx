
import LoginForm from '../components/LoginForm';
import '../Styles/login.css'; 

export default function Login() {
  return (
    <div className="login-container">
      <div className="logo">
        <img src="ruta/a/tu/logo.png" alt="Logo Veterinaria" className="logo-img" />
        <h1 className="login-title">Veterinaria Salud Animal</h1>
        <h2 className="login-subtitle">Tu mascota en buenas manos</h2>
      </div>
      <LoginForm />
    </div>
  );
}
