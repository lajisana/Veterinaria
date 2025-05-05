import { useEffect, useState } from 'react';
import '../Styles/mascotas.css';

interface Mascota {
  id: number;
  nombre: string;
  especie: string;
  edad: number;
  dueño: string;
  ultimaCita: string;
}

export default function Mascotas() {
  const [mascotas, setMascotas] = useState<Mascota[]>([]);

  useEffect(() => {
    // Simulación de carga de datos
    setMascotas([
      {
        id: 1,
        nombre: 'Firulais',
        especie: 'Perro',
        edad: 5,
        dueño: 'Juan Pérez',
        ultimaCita: '2025-05-02',
      },
      {
        id: 2,
        nombre: 'Misi',
        especie: 'Gato',
        edad: 3,
        dueño: 'Laura Santiago',
        ultimaCita: '2025-04-28',
      },
      {
        id: 3,
        nombre: 'Max',
        especie: 'Conejo',
        edad: 2,
        dueño: 'Carlos Ruiz',
        ultimaCita: '2025-03-15',
      },
    ]);
  }, []);

  return (
    <div className="tabla-mascotas-container">
      <h2>Listado de Mascotas</h2>
      <table className="tabla-mascotas">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Especie</th>
            <th>Edad</th>
            <th>Dueño</th>
            <th>Última Cita</th>
          </tr>
        </thead>
        <tbody>
          {mascotas.map((m) => (
            <tr key={m.id}>
              <td>{m.nombre}</td>
              <td>{m.especie}</td>
              <td>{m.edad} años</td>
              <td>{m.dueño}</td>
              <td>{m.ultimaCita}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
