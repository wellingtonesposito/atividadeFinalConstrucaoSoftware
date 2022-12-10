import { useState, useEffect } from "react";
import FormCadastroReserva from "./FormCadastroReserva";
import TabelaCadastroReserva from "./TabelaCadastroReserva";
import {Spinner} from "react-bootstrap";

export default function TelaCadastroReserva(props){
    
    const localRecursos = 'http://localhost:4000/reserva';

    const [exibeTabelaReserva, setExibeTabelaReserva] = useState(false); /* alterei useState para false, para iniciar diretamente na tela cadastro reserva*/
    const [listaReserva, setListaReserva] = useState([]);
    const [erroReserva, setErroReserva] = useState(null);
    const [processadoReserva, setProcessadoReserva] = useState(false);
    const [atualizandoReserva, setAtualizandoReserva] = useState(false);
    const [reservaEmEdicao, setReservaEmEdicao] = useState({/*incluir dados das reservas aqui*/});

    function alternarTelasReserva(){
        setExibeTabelaReserva(!exibeTabelaReserva)
    }

    function prepararReservaParaEdicao(reserva){
        setAtualizandoReserva(true);
        setReservaEmEdicao(reserva);
        setExibeTabelaReserva(false);
    }

    function buscarReserva(){
        fetch(localRecursos,{method:"GET"}).then((resposta) => {
            if (resposta.ok){
                return resposta.json();
            }
        }).then((dados) => {
            setProcessadoReserva(true);
            setListaReserva(dados);
        }, (error) => {
            setProcessadoReserva(true);
            setErroReserva(error);
        });
    }

    function apagarReserva(reserva){
        fetch(localRecursos, {
                                method:"DELETE",
                                headers:{'Content-Type':'application/json'},
                                body: JSON.stringify(reserva)
                            }).then((resposta) => {
                                return resposta.json()
                            }).then((retorno) => {
                                if(retorno.resultado){
                                    buscarReserva();
                                }
                                else{
                                    alert("Não foi possível excluir a reserva!");
                                }
                            });
    }

    useEffect(() => {
        buscarReserva();
    },[listaReserva]);

    if (erroReserva){
        return <div>
            <p>Erro ao obter as reservas do Backend : {erroReserva.message}</p>
        </div>
    }
    else if (!processadoReserva){
        return  <Spinner animation="border" role="status">
                    <span className="visually-hidden">Carregando Reservas...</span>
                </Spinner>
    }
    else{
        return (
            exibeTabelaReserva ? <TabelaCadastroReserva reserva={listaReserva} chamarTelaCadastro={alternarTelasReserva} editarReserva={prepararReservaParaEdicao} excluirReserva={apagarReserva}/> : 
            <FormCadastroReserva chamarTabela={alternarTelasReserva} modoEdicao={atualizandoReserva} reserva={reservaEmEdicao}/>
        );
    }
}