import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TransactionForm from '../molecules/TransactionForm';
import { FaMoneyCheckAlt } from 'react-icons/fa';

const Fondos = () => {
  const [fondos, setFondos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/transacciones/')
      .then(response => {
        setFondos(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleTransactionSubmit = (transaction) => {
    const endpoint = transaction.tipo_transaccion === 'suscribir' ? 'suscribir' : 'cancelar';
    axios.post(`http://localhost:3000/${endpoint}/`, transaction)
      .then(response => {
        alert('Transacción exitosa');
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-gray-900">Gestión de Fondos</h1>
      
      <TransactionForm onSubmit={handleTransactionSubmit} />

      <h2 className="text-2xl font-bold mt-10 text-gray-800">Historial de Transacciones</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {fondos.map(fondo => (
          <div key={fondo.fondo_id} className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <FaMoneyCheckAlt className="text-green-500 mr-2" size={24} />
              <h3 className="text-xl font-semibold text-gray-800">{fondo.nombre_fondo}</h3>
            </div>
            <p className="text-gray-600">Transacciones: {fondo.transacciones.length}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fondos;
