import React, { useState } from 'react';
import './VehicleForm.module.css';

const VehicleForm = ({ onVehicleSubmit }) => {
  const [form, setForm] = useState({ brand: '', model: '', year: '', plate: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onVehicleSubmit(form);
    setForm({ brand: '', model: '', year: '', plate: '' });
  };

  return (
    <form className="formContainer" onSubmit={handleSubmit}>
      <input
        type="text"
        name="brand"
        placeholder="Marca"
        value={form.brand}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="model"
        placeholder="Modelo"
        value={form.model}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="year"
        placeholder="Ano"
        value={form.year}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="plate"
        placeholder="Placa"
        value={form.plate}
        onChange={handleChange}
        required
      />
      <button type="submit">Cadastrar</button>
    </form>
  );
};

export default VehicleForm;
