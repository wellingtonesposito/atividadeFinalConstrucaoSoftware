import express from 'express';
import Reserva from '../modelo/reserva.js';
import ReservaDB from '../persistencia/reservaDB.js';

export const rotaReserva = express.Router();

rotaReserva.use(express.json());
rotaReserva.use(express.urlencoded({extend:true}));

const reservaDB = new ReservaDB();

rotaReserva.route('/:id?')
.get((req, resp) => {
    if (req.params.id)
    {
        reservaDB.consultarReservaID(req.params.id).then((reserva) =>{
            if (reserva)
            {
                resp.statusCode=200;    
                resp.setHeader("Content-Type","application/json");
                resp.json(reserva);
            }
            else
            {
                resp.statusCode=404;    
                resp.setHeader("Content-Type","application/json");
                resp.json({});
            }
        });
    }
    else
    {
        reservaDB.consultarReservaNome("").then((listaReserva) =>{
            resp.statusCode=200;
            resp.setHeader("Content-Type","application/json");
            resp.json(listaReserva);
        });
        
    }
})
.post((req,resp) =>{
    if (req.params.id){
        resp.statusCode=404;
        resp.setHeader("Content-Type","text/html");
        resp.end('Não é possível realizar um POST passando um ID');    
    }
    else{
        const dados = req.body;
        if (dados){
            const reserva = new Reserva( 0, 
                                         dados.nome, 
                                         dados.rg, 
                                         dados.cpf, 
                                         dados.rua, 
                                         dados.endnum, 
                                         dados.bairro, 
                                         dados.cidade, 
                                         dados.estado, 
                                         dados.email, 
                                         dados.telefone, 
                                         dados.datainicio, 
                                         dados.datafim);
                                         
            reservaDB.incluirReserva(reserva).then((obj)=>{
                resp.statusCode=200;
                resp.setHeader("Content-Type","application/json");
                resp.json(obj);
            });
        }
        
    }
})
.put((req,resp) => {
    const dados = req.body;
    const reserva = new Reserva( dados.id,
                                 dados.nome, 
                                 dados.rg, 
                                 dados.cpf, 
                                 dados.rua, 
                                 dados.endnum, 
                                 dados.bairro, 
                                 dados.cidade, 
                                 dados.estado, 
                                 dados.email, 
                                 dados.telefone, 
                                 dados.datainicio, 
                                 dados.datafim
                                );

    reservaDB.atualizarReserva(reserva).then((resultado) =>{
        resp.statusCode=200;
        resp.setHeader("Content-Type","application/json");
        resp.json(resultado);    
    });
})
.delete((req,resp)=>{
    const dados = req.body;
    if (dados){
        const reserva = new Reserva( dados.id,
                                     dados.nome, 
                                     dados.rg, 
                                     dados.cpf, 
                                     dados.rua, 
                                     dados.endnum, 
                                     dados.bairro, 
                                     dados.cidade, 
                                     dados.estado, 
                                     dados.email, 
                                     dados.telefone, 
                                     dados.datainicio, 
                                     dados.datafim
                                    );

        reservaDB.excluirReserva(reserva).then((resultado) => {
            resp.statusCode=200;
            resp.setHeader("Content-Type","application/json");
            resp.json(resultado);
        });
    }
    else{
        resp.statusCode=200;
        resp.setHeader("Content-Type","text/html");
        resp.end('Método não permitido para todos as reservas');
    }
})
