import { Button, Table } from "react-bootstrap";
import { IconeExcluir } from "../icones/icones";

export default function TabelaCadastroReserva(props){
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Identificador da Reserva</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Telefone</th>
                        <th>Início</th>
                        <th>Fim</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                {
                    props.reserva.map((reserva, i) => {
                        return (
                            <tr key={i}>
                                <td>{reserva.id}</td>
                                <td>{reserva.nome}</td>
                                <td>{reserva.email}</td>
                                <td>{reserva.telefone}</td>
                                <td>{reserva.datainicio}</td>
                                <td>{reserva.datafim}</td>  
                                <td>
                                    <Button variant="outline-danger" onClick={()=> {props.excluirReserva(reserva)}}><IconeExcluir/></Button>
                                </td>
                            </tr>
                        );
                    })
                }
                </tbody>
            </Table>
            <Button onClick = {props.chamarTelaCadastro} variant="success" className="m-1">Criar Reserva</Button>
        </div>
    )
}