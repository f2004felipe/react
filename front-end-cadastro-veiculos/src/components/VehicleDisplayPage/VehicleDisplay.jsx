import React from 'react';
import './VehicleForm.module.css'; // Reutilizando estilos existentes

const VehicleDisplay = ({ vehicle }) => {
  if (!vehicle) {
    return <p>Nenhum veículo cadastrado.</p>;
  }

  return (
    <div className="formContainer">
      <h2>Detalhes do Veículo</h2>
      <div>
        <strong>Marca:</strong> {vehicle.brand}
      </div>
      <div>
        <strong>Modelo:</strong> {vehicle.model}
      </div>
      <div>
        <strong>Ano:</strong> {vehicle.year}
      </div>
      <div>
        <strong>Placa:</strong> {vehicle.plate}
      </div>
    </div>
  );
};

export default VehicleDisplay;
