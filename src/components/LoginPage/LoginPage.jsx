import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LoginPage.module.css";
import {
  TextField,
  Button,
  Box,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [openErrorDialog, setOpenErrorDialog] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setOpenErrorDialog(true);
    } else {
      navigate("/cadastro");
    }
  };

  const handleCloseErrorDialog = () => {
    setOpenErrorDialog(false);
  };

  return (
    <Box
      component="form"
      onSubmit={handleLogin}
      className={styles.formContainer}
    >
      <Typography variant="h5" className={styles.title}>
        Login
      </Typography>
      <TextField
        label="Usuário"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        label="Senha"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button variant="contained" color="primary" type="submit">
        Entrar
      </Button>

      <Dialog open={openErrorDialog} onClose={handleCloseErrorDialog}>
        <DialogTitle>Erro de Login</DialogTitle>
        <DialogContent>
          <Typography>Por favor, insira seu usuário e senha.</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseErrorDialog} color="primary">
            Fechar
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default LoginPage;
