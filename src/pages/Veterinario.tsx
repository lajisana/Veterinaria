// src/pages/Veterinario.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/veterinario.css';

type Cita = {
  id: string;
  mascota: string;
  propietario: string;
  fecha: string;
  hora: string;
  estado: 'pendiente' | 'realizada';
};

export default function Veterinario() {
  // Ejemplo de citas programadas
  const [citas, setCitas] = useState<Cita[]>([
    { id: '1', mascota: 'Fido', propietario: 'Laura', fecha: '2025-05-10', hora: '10:00 AM', estado: 'pendiente' },
    { id: '2', mascota: 'Miau', propietario: 'Carlos', fecha: '2025-05-11', hora: '11:30 AM', estado: 'realizada' },
  ]);

  return (
    <div className="veterinario-page">
      <header className="header-veterinario">
        <h2>Bienvenido Veterinario</h2>
        <p>Tu espacio de gestión de citas y pacientes.</p>
      </header>

      <section className="citas-section">
        <h3>Citas Pendientes</h3>
        {citas.length === 0 ? (
          <p>No tienes citas programadas.</p>
        ) : (
          <ul className="citas-list">
            {citas.filter(cita => cita.estado === 'pendiente').map((cita) => (
              <li key={cita.id} className="cita-item">
                <Link to={`/cita/${cita.id}`}>
                  <div className="cita-details">
                    <h4>{cita.mascota} ({cita.propietario})</h4>
                    <p>{cita.fecha} a las {cita.hora}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
