import '../Styles/footer.css';   

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Sección de información de la clínica */}
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-bold">VetSalud</p>
            <p className="text-gray-400 text-sm">Cuidando a tus mascotas desde 2025</p>
          </div>
          
          {/* Sección de copyright y mensaje con corazón */}
          <div className="flex flex-col items-center md:items-end">
            <p className="text-sm text-gray-400">
              Hecho con amor para nuestros amigos peludos
            </p>
            <p className="text-sm text-gray-400 mt-1">
              &copy; {new Date().getFullYear()} VetSalud. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
