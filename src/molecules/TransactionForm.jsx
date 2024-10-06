import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '../atoms/Button';
import Input from '../atoms/Input';
import Select from '../atoms/Select';

const TransactionForm = ({fetchFondos = {}}) => {
  const [fondoId, setFondoId] = useState('');
  const [monto, setMonto] = useState(0);
  const [transaccionTipo, setTransaccionTipo] = useState('suscribir');
  const [notificacion, setNotificacion] = useState('email');
  const [error, setError] = useState(null);
  const [fondos, setFondos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/v1/fondo')
      .then(response => {
        setFondos(response.data.data)
        localStorage.setItem('combo', JSON.stringify(response.data.data))
      })
      .catch(error => setError(error.message));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (monto <= 0) {
      setError('El monto debe ser mayor a 0');
      return;
    }
    try {
      const response = await axios.post('http://localhost:3000/api/v1/transaccion', {
        fondoId,
        monto,
        tipo: transaccionTipo,
        notificacion,
      });
      if (response && response.data) {
        alert('Transacción exitosa');
        fetchFondos();
      } else {
        setError('Error: no se recibieron datos de la API');
      }
    } catch (error) {
      if (error.response && error.response.data) {
        setError(error.response.data.error);
      } else {
        setError('Ocurrió un error en la transacción');
      }
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white shadow-lg rounded-md">
    {
      fondos.length > 0&&(
        <Select 
          label="Seleccione un Fondo"
          value={fondoId}
          onChange={(e) => setFondoId(e.target.value)}
          options={fondos.map(fondo => ({ value: fondo.id, label: fondo.nombre }))}
        />
      )
    }
      <Input 
        label="Monto" 
        type="number" 
        value={monto} 
        onChange={(e) => setMonto(e.target.value)} 
      />
      <Select
        label="Tipo de Transacción"
        value={transaccionTipo}
        onChange={(e) => setTransaccionTipo(e.target.value)}
        options={[
          { value: 'suscribir', label: 'Suscribir' },
          { value: 'cancelar', label: 'Cancelar' },
        ]}
      />
      <Select
        label="Notificación"
        value={notificacion}
        onChange={(e) => setNotificacion(e.target.value)}
        options={[
          { value: 'email', label: 'Email' },
          { value: 'sms', label: 'SMS' },
        ]}
      />
      {error && <p className="text-red-500">{error}</p>}
      <Button text="Enviar" />
    </form>
  );
};

export default TransactionForm;
