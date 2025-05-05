import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Resgistro';
import AppointmentsPage from './pages/AgendarCitas';
import HistoryPage from './pages/HistorialCitas';
import PetsPage from './pages/Mascotas';
import OwnerPetsPage from './pages/Mascotasdueño';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registro" element={<RegisterPage />} />
        <Route path="/citas" element={<PrivateRoute><AppointmentsPage /></PrivateRoute>} />
        <Route path="/historial" element={<PrivateRoute><HistoryPage /></PrivateRoute>} />
        <Route path="/mascotas" element={<PrivateRoute><PetsPage /></PrivateRoute>} />
        <Route path="/mascotas-por-dueno" element={<PrivateRoute><OwnerPetsPage /></PrivateRoute>} />
      </Routes>
    </div>
  );
}

export default App;
