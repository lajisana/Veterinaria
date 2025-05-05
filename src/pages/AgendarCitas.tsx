import { useAuth } from '../context/Context';
import { useEffect, useState } from 'react';
import '../Styles/listaCitas.css';

interface Cita {
  id: number;
  fecha: string;
  mascota: string;
  dueño: string;
  motivo: string;
  especie?: string;
  raza?: string;
  edad?: string;
}

export default function AgendarCita() {
  const { user } = useAuth();
  const [citas, setCitas] = useState<Cita[]>([]);
  const [nuevaCita, setNuevaCita] = useState({
    mascota: '',
    especie: '',
    raza: '',
    edad: '',
    motivo: '',
    fecha: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setNuevaCita({ ...nuevaCita, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nueva: Cita = {
      id: citas.length + 1,
      fecha: nuevaCita.fecha,
      mascota: nuevaCita.mascota,
      dueño: user?.nombre || 'Dueño desconocido',
      motivo: nuevaCita.motivo,
      especie: nuevaCita.especie,
      raza: nuevaCita.raza,
      edad: nuevaCita.edad,
    };
    setCitas([...citas, nueva]);
    setNuevaCita({
      mascota: '',
      especie: '',
      raza: '',
      edad: '',
      motivo: '',
      fecha: '',
    });
  };

  if (!user) return <p>No has iniciado sesión.</p>;

  if (user.rol === 'veterinario') {
    return (
      <div className="lista-citas-container">
        <h2>Lista de Citas</h2>
        {citas.length === 0 ? (
          <p>No hay citas registradas.</p>
        ) : (
          <ul className="citas-lista">
            {citas.map((cita) => (
              <li key={cita.id} className="cita-item">
                <div className="cita-header">
                  <strong>{cita.mascota}</strong> — <span>{cita.fecha}</span>
                </div>
                <div className="cita-detalles">
                  <p><strong>Especie:</strong> {cita.especie}</p>
                  <p><strong>Raza:</strong> {cita.raza}</p>
                  <p><strong>Edad:</strong> {cita.edad}</p>
                  <p><strong>Dueño:</strong> {cita.dueño}</p>
                  <p><strong>Motivo:</strong> {cita.motivo}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }

  if (user.rol === 'dueño') {
    return (
      <div className="formulario-cita">
        <h2>Agendar una nueva cita</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="mascota" placeholder="Nombre de la mascota" value={nuevaCita.mascota} onChange={handleChange} required />
          <select name="especie" value={nuevaCita.especie} onChange={handleChange} required>
            <option value="">Selecciona especie</option>
            <option value="Perro">Perro</option>
            <option value="Gato">Gato</option>
            <option value="Ave">Ave</option>
            <option value="Otro">Otro</option>
          </select>
          <input type="text" name="raza" placeholder="Raza" value={nuevaCita.raza} onChange={handleChange} required />
          <input type="text" name="edad" placeholder="Edad" value={nuevaCita.edad} onChange={handleChange} required />
          <input type="text" name="motivo" placeholder="Motivo de la cita" value={nuevaCita.motivo} onChange={handleChange} required />
          <input type="datetime-local" name="fecha" value={nuevaCita.fecha} onChange={handleChange} required />
          <button type="submit">Agendar</button>
        </form>

        {/* Mostrar citas agendadas por el dueño */}
        {citas.length > 0 && (
          <>
            <h3>Mis citas agendadas</h3>
            <ul>
              {citas.map((cita) => (
                <li key={cita.id}>
                  {cita.fecha} - {cita.mascota} ({cita.especie}) - Motivo: {cita.motivo}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    );
  }

  return <p>Rol desconocido.</p>;
}
