import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './VehicleForm.module.css';
import { TextField, Button, Box, Typography } from '@mui/material';

const VehicleForm = ({ onAddVehicle, editableVehicle, onUpdateVehicle, isEditing }) => {
  const [vehicle, setVehicle] = useState({
    marca: '',
    modelo: '',
    ano: '',
    placa: '',
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (isEditing) {
      setVehicle(editableVehicle);
    } else {
      setVehicle({ marca: '', modelo: '', ano: '', placa: '' });
    }
  }, [editableVehicle, isEditing]);

  const validateForm = () => {
    const newErrors = {};
    const currentYear = new Date().getFullYear();
    const placaPattern = /^[A-Z]{3}-\d{4}$/;

    if (!vehicle.marca.trim()) newErrors.marca = 'A marca é obrigatória';
    if (!vehicle.modelo.trim()) newErrors.modelo = 'O modelo é obrigatório';
    if (!vehicle.ano || vehicle.ano < 1920 || vehicle.ano > currentYear)
      newErrors.ano = `Insira um ano entre 1920 e ${currentYear}`;
    if (!placaPattern.test(vehicle.placa)) newErrors.placa = 'Formato da placa: AAA-1234';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVehicle((prevVehicle) => ({
      ...prevVehicle,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      if (isEditing) {
        onUpdateVehicle(vehicle);
      } else {
        onAddVehicle(vehicle);
      }
      setVehicle({ marca: '', modelo: '', ano: '', placa: '' });
      setErrors({});
    }
  };

  return (
    <Box
      component="form"
      className={styles.formContainer}
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
        mt: 3,
      }}
    >
      <Typography variant="h5">
        {isEditing ? 'Editar Veículo' : 'Cadastrar Veículo'}
      </Typography>
      <TextField
        label="Marca"
        name="marca"
        value={vehicle.marca}
        onChange={handleChange}
        error={!!errors.marca}
        helperText={errors.marca}
      />
      <TextField
        label="Modelo"
        name="modelo"
        value={vehicle.modelo}
        onChange={handleChange}
        error={!!errors.modelo}
        helperText={errors.modelo}
      />
      <TextField
        label="Ano"
        name="ano"
        type="number"
        value={vehicle.ano}
        onChange={handleChange}
        error={!!errors.ano}
        helperText={errors.ano}
      />
      <TextField
        label="Placa"
        name="placa"
        value={vehicle.placa}
        onChange={handleChange}
        error={!!errors.placa}
        helperText={errors.placa}
      />
      <Button variant="contained" color="primary" type="submit">
        {isEditing ? 'Atualizar' : 'Cadastrar'}
      </Button>
    </Box>
  );
};
VehicleForm.propTypes = {
  onAddVehicle: PropTypes.func.isRequired,
  editableVehicle: PropTypes.shape({
    marca: PropTypes.string,
    modelo: PropTypes.string,
    ano: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    placa: PropTypes.string,
  }),
  onUpdateVehicle: PropTypes.func.isRequired,
  isEditing: PropTypes.bool.isRequired,
};

export default VehicleForm;