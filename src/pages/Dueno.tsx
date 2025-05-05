// src/pages/Dueno.tsx
import React from 'react';
import { Link } from 'react-router-dom';
export default function Dueno() {
  return (
    <div className="dueno-page">
      <header>
        <h2>Bienvenido, DUEÑO de mascota</h2>
        <p>
          En este sistema podrás llevar el control y cuidado de tus mascotas de forma sencilla.
        </p>
      </header>

      <section className="dueno-actions">
        <h3>¿Qué puedes hacer aquí?</h3>
        <ul>
          <li>
            <strong>Registrar y gestionar tus mascotas:</strong> Ingresa los datos de tus mascotas y mantén su información actualizada.
          </li>
          <li>
            <strong>Consultar historial médico:</strong> Visualiza las visitas veterinarias anteriores y los tratamientos recibidos.
          </li>
          <li>
            <strong>Agendar nuevas citas:</strong> Elige fecha, hora y motivo para programar una consulta con el veterinario.
          </li>
        </ul>
      </section>
    </div>
  );
}

