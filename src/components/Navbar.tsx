import { Link, useNavigate } from 'react-router-dom'; // 👈 añade useNavigate
import { useAuth } from '../context/Context';
import '../Styles/navbar.css';

export default function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();
  const navigate = useNavigate(); // 👈 inicializa navigate

  const handleLogout = () => {
    logout();              // Limpia sesión
    navigate('/login');    // Redirige al login
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>Veterinaria Salud Animal</h1> 
      </div>
      <ul className="navbar-links">
        <li>
      <li>
  <Link to={
    isAuthenticated
      ? user?.rol === 'veterinario'
        ? '/veterinario'
        : '/dueno'
      : '/login'
  }>
    Inicio
  </Link>
</li>


        </li>
        {isAuthenticated ? (
          <>
            <li>
              <Link to="/citas">Citas</Link>
            </li>
            <li>
              <Link to="/historial">Historial</Link>
            </li>
            {user?.rol === 'veterinario' && (
              <li>
                <Link to="/mascotas">Mascotas</Link>
              </li>
            )}
            {user?.rol === 'dueño' && (
              <li>
                <Link to="/mismascotas">Mis Mascotas</Link>
              </li>
            )}
            <li>
              <button onClick={handleLogout}>Cerrar sesión</button> {/* 👈 usa handleLogout */}
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/registro">Registro</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
