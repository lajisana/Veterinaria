import { useState } from 'react';
import '../Styles/MisMascotas.css'; 

interface Mascota {
  id: number;
  nombre: string;
  especie: string;
  edad: number;
}

export default function MisMascotas() {
  const [mascotas, setMascotas] = useState<Mascota[]>([
    { id: 1, nombre: 'Firulais', especie: 'Perro', edad: 3 },
    { id: 2, nombre: 'Misi', especie: 'Gato', edad: 2 },
  ]);

  const [editandoId, setEditandoId] = useState<number | null>(null);
  const [formData, setFormData] = useState<Mascota | null>(null);

  const handleEditClick = (mascota: Mascota) => {
    setEditandoId(mascota.id);
    setFormData({ ...mascota });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!formData) return;
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    if (formData) {
      setMascotas((prev) =>
        prev.map((m) => (m.id === formData.id ? formData : m))
      );
      setEditandoId(null);
      setFormData(null);
    }
  };

  return (
    <div className="tabla-container">
      <h2>Mis Mascotas</h2>
      <table className="mascotas-tabla">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Especie</th>
            <th>Edad</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {mascotas.map((m) =>
            editandoId === m.id ? (
              <tr key={m.id}>
                <td>
                  <input
                    name="nombre"
                    value={formData?.nombre || ''}
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <input
                    name="especie"
                    value={formData?.especie || ''}
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <input
                    name="edad"
                    type="number"
                    value={formData?.edad || ''}
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <button onClick={handleSave}>Guardar</button>
                </td>
              </tr>
            ) : (
              <tr key={m.id}>
                <td>{m.nombre}</td>
                <td>{m.especie}</td>
                <td>{m.edad} años</td>
                <td>
                  <button onClick={() => handleEditClick(m)}>Editar</button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}
