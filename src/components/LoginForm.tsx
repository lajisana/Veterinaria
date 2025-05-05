import { useState, FormEvent } from 'react';
import { useAuth } from '../context/Context';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

 
    const handleSubmit = (e: FormEvent) => {
      e.preventDefault();
    

      if (email === 'admin@example.com' && password === '1234') {
        login({ email, nombre: 'Admin', rol: 'veterinario' }); // Asumiendo rol 'veterinario'
        navigate('/veterinario'); // Redirigir al veterinario
      } else if (email === 'laura@example.com' && password === '1234') {
        login({ email, nombre: 'Laura', rol: 'dueño' }); // Asumiendo rol 'dueño'
        navigate('/dueno'); // Redirigir al dueño de mascota
      } else {
        alert('Credenciales inválidas');
      }
    };
    
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Contraseña:</label>
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
      </div>
      <button type="submit">Iniciar sesión</button>
    </form>
  );
}
