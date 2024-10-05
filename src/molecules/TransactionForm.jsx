import React, { useState } from 'react';
import Input from '../atoms/Input';
import Select from '../atoms/Select';
import Button from '../atoms/Button';
import { FaCheckCircle } from 'react-icons/fa';

const TransactionForm = ({ onSubmit }) => {
  const [fondoId, setFondoId] = useState('');
  const [transaccionTipo, setTransaccionTipo] = useState('suscribir');
  const [notificacion, setNotificacion] = useState('email');
  const [errors, setErrors] = useState({}); // Estado para errores

  // Validaciones
  const validate = () => {
    const newErrors = {};
    if (!fondoId) newErrors.fondoId = 'El ID del fondo es obligatorio';
    if (!transaccionTipo) newErrors.transaccionTipo = 'Seleccione un tipo de transacción';
    if (!notificacion) newErrors.notificacion = 'Seleccione un método de notificación';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      onSubmit({
        fondo_id: fondoId,
        tipo_transaccion: transaccionTipo,
        notificacion: notificacion,
      });
    }
  };

  const tipoTransaccionOptions = [
    { value: 'suscribir', label: 'Suscribir' },
    { value: 'cancelar', label: 'Cancelar' },
  ];

  const notificacionOptions = [
    { value: 'email', label: 'Email' },
    { value: 'sms', label: 'SMS' },
  ];

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
      <div>
        <Input label="Fondo ID" value={fondoId} onChange={(e) => setFondoId(e.target.value)} />
        {errors.fondoId && <p className="text-red-500 text-sm mt-1">{errors.fondoId}</p>}
      </div>

      <div>
        <Select label="Tipo de Transacción" options={tipoTransaccionOptions} value={transaccionTipo} onChange={(e) => setTransaccionTipo(e.target.value)} />
        {errors.transaccionTipo && <p className="text-red-500 text-sm mt-1">{errors.transaccionTipo}</p>}
      </div>

      <div>
        <Select label="Notificación" options={notificacionOptions} value={notificacion} onChange={(e) => setNotificacion(e.target.value)} />
        {errors.notificacion && <p className="text-red-500 text-sm mt-1">{errors.notificacion}</p>}
      </div>

      <Button text="Enviar" icon={<FaCheckCircle />} />
    </form>
  );
};

export default TransactionForm;
