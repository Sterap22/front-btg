import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TransactionForm from '../molecules/TransactionForm';
import { FaMoneyCheckAlt } from 'react-icons/fa';

const Fondos = () => {
  const [fondos, setFondos] = useState([]);
  const [comboF, setComboF] = useState([]);

  const fetchFondos = () => {
    console.log('Llego de nuevo');
    
    axios.get('http://localhost:3000/api/v1/transaccion')
      .then(response => {
        setFondos(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchFondos();
    setComboF(JSON.parse(localStorage.getItem('combo')));
  }, []);



  return (
    <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-gray-900">Gestión de Fondos</h1>
      
      <TransactionForm fetchFondos={fetchFondos} />

      <h2 className="text-2xl font-bold mt-10 text-gray-800 border-b-2 pb-2 mb-4">Historial de Transacciones</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {!!fondos && fondos.map(fondo => (
          <div key={fondo.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-200">
            <div className="flex items-center mb-4">
              <FaMoneyCheckAlt className="text-green-500 mr-4" size={28} />
              <div>
                <h3 className="text-xl font-bold text-gray-800">{fondo.nombre_fondo}</h3>
                <span className={`inline-block px-3 py-1 mt-1 rounded-full text-sm ${fondo.tipo === 'suscribir' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {fondo.tipo === 'suscribir' ? 'Suscripción' : 'Cancelación'}
                </span>
              </div>
            </div>
            <div className="mt-2">
              <h4 className="text-lg font-semibold text-gray-700">Fondo relacionado:</h4>
              <p className="text-gray-600">
                {comboF.filter(x => parseInt(x.id) === parseInt(fondo.fondoId))[0]?.nombre || 'Fondo no encontrado'}
              </p>
            </div>
            <div className="mt-4">
              <h4 className="text-lg font-semibold text-gray-700">Detalles:</h4>
              <p className="text-gray-600">Cantidad de transacciones: {fondos.length}</p>
              <p className="text-gray-600">Fecha de transacción: {fondo.fecha_transaccion || 'Fecha no disponible'}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fondos;
