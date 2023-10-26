import express from 'express';
import { registerController, loginController,logoutController } from '../controllers/ONGController';

const ongRoutes = express.Router();

// Rota para o registro (cadastro) de uma ONG
ongRoutes.post('/register', registerController);

// Rota para o login de uma ONG
ongRoutes.post('/login', loginController);

// Rota para o logout de uma ONG
ongRoutes.post('/logout', logoutController);

export {ongRoutes};