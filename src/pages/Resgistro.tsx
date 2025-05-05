import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rol, setRol] = useState('dueño');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica de guardado, por ahora simulamos el login
    if (rol === 'veterinario') {
      navigate('/veterinario');
    } else {
      navigate('/dueno');
    }
  };

  return (
    <div>
      <h2>Registro</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Correo" value={email} onChange={e => setEmail(e.target.value)} required />
        <input type="password" placeholder="Contraseña" value={password} onChange={e => setPassword(e.target.value)} required />
        <select value={rol} onChange={e => setRol(e.target.value)}>
          <option value="dueño">Dueño de mascota</option>
          <option value="veterinario">Veterinario</option>
        </select>
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}

export default Register;
