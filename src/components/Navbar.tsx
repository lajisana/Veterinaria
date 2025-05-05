
import { Link } from 'react-router-dom';
import { useAuth } from '../context/Context';
import '../Styles/navbar.css';

export default function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>Veterinaria Salud Animal</h1> {/* Aquí puedes poner el logo si tienes */}
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Inicio</Link>
        </li>
        {isAuthenticated ? (
          <>
            <li>
              <Link to="/citas">Citas</Link>
            </li>
            <li>
              <Link to="/historial">Historial</Link>
            </li>
            <li>
              <Link to="/mascotas">Mascotas</Link>
            </li>
            <li>
              <Link to="/mascotas-por-dueno">Por Dueño</Link>
            </li>
            {user?.rol === 'veterinario' && (
              <li>
                <Link to="/mascotas">Mascotas</Link>
              </li>
            )}
            {user?.rol === 'dueño' && (
              <li>
                <Link to="/mascotas-por-dueno">Mis Mascotas</Link>
              </li>
            )}
            <li>
              <button onClick={logout}>Cerrar sesión</button>
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
