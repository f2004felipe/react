import PropTypes from 'prop-types';
import styles from './VehicleList.css';
import { Button } from '@mui/material';

function VehicleList({ vehicles }) {
  return (
    <ul className="vehicleListContainer">
      {vehicles.map((vehicle, index) => (
        <li key={index} className="vehicleListItem">
          <span className="vehicleText">{vehicle.name}</span>
          <button className="vehicleButton">Editar</button>
          <button className="vehicleButton">Excluir</button>
        </li>
      ))}
    </ul>
  );
}


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
