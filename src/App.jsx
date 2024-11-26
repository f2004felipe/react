import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useState } from "react";
import LoginPage from "./components/LoginPage/LoginPage";
import VehicleForm from "./components/RegisterPage/VehicleForm";
import VehicleList from "./components/RegisterPage/VehicleList";

function App() {
  const [vehicles, setVehicles] = useState([]);
  const [editableVehicle, setEditableVehicle] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const addVehicle = (newVehicle) => {
    setVehicles([...vehicles, newVehicle]);
  };

  const updateVehicle = (updatedVehicle) => {
    const updatedVehicles = vehicles.map((v, index) =>
      index === vehicles.indexOf(editableVehicle) ? updatedVehicle : v
    );
    setVehicles(updatedVehicles);
    setIsEditing(false);
    setEditableVehicle(null);
  };

  const removeVehicle = (index) => {
    const updatedVehicles = vehicles.filter((_, i) => i !== index);
    setVehicles(updatedVehicles);
  };

  const editVehicle = (index) => {
    setEditableVehicle(vehicles[index]);
    setIsEditing(true);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route
            path="/cadastro"
            element={
              <>
                <h1>Cadastro de Veículos</h1>
                <VehicleForm
                  onAddVehicle={addVehicle}
                  editableVehicle={editableVehicle}
                  onUpdateVehicle={updateVehicle}
                  isEditing={isEditing}
                />
                <VehicleList
                  vehicles={vehicles}
                  onRemoveVehicle={removeVehicle}
                  onEditVehicle={editVehicle}
                />
              </>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
