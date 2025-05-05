import { useEffect, useState } from 'react';
import { useAuth } from '../context/Context'; // 👈 importa el contexto
import '../Styles/listaCitas.css';

interface Cita {
  id: number;
  fecha: string;
  mascota: string;
  dueño: string;
  motivo: string;
}

export default function ListaCitas() {
  const { user } = useAuth(); // 👈 accede al usuario desde el contexto
  const [citas, setCitas] = useState<Cita[]>([]);

  useEffect(() => {
    if (user?.rol === 'veterinario') {
      setCitas([
        { id: 1, fecha: '2025-05-10 09:00', mascota: 'Firulais', dueño: 'Juan Pérez', motivo: 'Vacunación' },
        { id: 2, fecha: '2025-05-11 14:30', mascota: 'Misi', dueño: 'Laura Santiago', motivo: 'Revisión general' },
        { id: 3, fecha: '2025-05-12 11:00', mascota: 'Toby', dueño: 'Carlos Ruiz', motivo: 'Chequeo dental' },
      ]);
    }
  }, [user]);

  // Si no está logueado o no es veterinario, muestra mensaje
  if (!user || user.rol !== 'veterinario') {
    return <p>No tienes acceso a esta página.</p>;
  }

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
