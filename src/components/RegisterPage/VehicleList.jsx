import PropTypes from 'prop-types';
import { Button } from '@mui/material';

const VehicleList = ({ vehicles, onRemoveVehicle, onEditVehicle }) => {
  return (
    <ul>
      {vehicles.map((vehicle, index) => (
        <li key={index}>
          {vehicle.marca} {vehicle.modelo} ({vehicle.ano}) - Placa: {vehicle.placa}
          <Button onClick={() => onEditVehicle(index)}>Editar</Button>
          <Button onClick={() => onRemoveVehicle(index)}>Remover</Button>
        </li>
      ))}
    </ul>
  );
};

VehicleList.propTypes = {
  vehicles: PropTypes.arrayOf(
    PropTypes.shape({
      marca: PropTypes.string.isRequired,
      modelo: PropTypes.string.isRequired,
      ano: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      placa: PropTypes.string.isRequired,
    })
  ).isRequired,
  onRemoveVehicle: PropTypes.func.isRequired,
  onEditVehicle: PropTypes.func.isRequired,
};

export default VehicleList;
