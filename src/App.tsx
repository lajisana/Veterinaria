
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Resgistro';
import Historial from './pages/HistorialCitas';
import PrivateRoute from './components/PrivateRoute';
import { Footer } from './components/Footer';
import './Styles/footer.css';  
import Veterinario from './pages/Veterinario';
import Dueno from './pages/Dueno';
import AgendarCita from './pages/AgendarCitas';
import MisMascotas from './pages/MISMascotas';
import Mascotas from './pages/Mascotas';




function App() {
  return (
    <div>
      <Navbar />
      <Routes>
      <Route path="/" element={<Veterinario />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registro" element={<RegisterPage />} />
        <Route path="/citas" element={<PrivateRoute><AgendarCita /></PrivateRoute>} />
        <Route path="/historial" element={<PrivateRoute><Historial /></PrivateRoute>} />
        <Route path="/veterinario" element={<PrivateRoute><Veterinario /></PrivateRoute>} />
        <Route path="/dueno" element={<PrivateRoute><Dueno /></PrivateRoute>} />
        <Route path="/mismascotas" element={<PrivateRoute><MisMascotas /></PrivateRoute>} />
        <Route path="/mascotas" element={<PrivateRoute><Mascotas /></PrivateRoute>} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;