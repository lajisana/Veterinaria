import { useAuth } from '../context/Context';
import { useEffect, useState } from 'react';
import '../Styles/historial.css';

interface Cita {
  id: number;
  fecha: string;
  mascota: string;
  dueño: string;
  motivo: string;
}

export default function HistorialCitas() {
  const { user } = useAuth();
  const [citas, setCitas] = useState<Cita[]>([]);

  useEffect(() => {
    const datosSimulados: Cita[] = user?.rol === 'veterinario'
      ? [
          { id: 1, fecha: '2025-05-01 10:00', mascota: 'Max', dueño: 'Laura', motivo: 'Vacuna' },
          { id: 2, fecha: '2025-05-03 12:00', mascota: 'Michi', dueño: 'Pedro', motivo: 'Revisión general' },
        ]
      : [
          { id: 3, fecha: '2025-04-28 09:30', mascota: 'Michi', dueño: user?.email ?? '', motivo: 'Desparasitación' },
        ];

    setCitas(datosSimulados);
  }, [user]);

  return (
    <div className="historial-container">
      <h2>Historial de Citas</h2>

      {citas.length === 0 ? (
        <p>No hay citas registradas.</p>
      ) : (
        <table className="historial-table">
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Mascota</th>
              <th>Dueño</th>
              <th>Motivo</th>
            </tr>
          </thead>
          <tbody>
            {citas.map((cita) => (
              <tr key={cita.id}>
                <td>{cita.fecha}</td>
                <td>{cita.mascota}</td>
                <td>{cita.dueño}</td>
                <td>{cita.motivo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
