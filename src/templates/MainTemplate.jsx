import React from 'react';

const MainTemplate = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-600 py-6 text-white text-center">
        <h1 className="text-4xl font-bold">Plataforma de Fondos BTG Pactual</h1>
      </header>
      <main className="p-8">
        {children}
      </main>
      <footer className="bg-blue-600 py-4 text-white text-center">
        <p>&copy; 2024 BTG Pactual. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default MainTemplate;
