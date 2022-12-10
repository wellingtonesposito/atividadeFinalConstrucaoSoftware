import express from 'express';
import http from 'http';
import cors from 'cors'

const hostname = 'localhost';
const porta = 4000;

const app = express();
app.use(cors({
    origin:"*"
}));

import {rotaReserva} from './rotas/rotaReserva.js';
app.use('/reserva', rotaReserva);

const servidor = http.createServer(app);
servidor.listen(porta,hostname, ()=>{
    console.log('Servidor escutando: ' + hostname + ":" + porta);
});