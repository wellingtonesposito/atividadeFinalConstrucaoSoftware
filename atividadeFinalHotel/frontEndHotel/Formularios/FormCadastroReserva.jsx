import { Container, Form, Row, Col, Button } from "react-bootstrap";
import {useState} from 'react';

export default function FormCadastroReserva(props){
    const localRecursos = 'http://localhost:4000/reserva';

    const [reserva, setReserva] = useState({});
    
    const [formularioValido, setFormularioValido] = useState(false);

    function manipularMudancaFormulario(e){
        const componente = e.target;
        setReserva({...reserva,[componente.name]:componente.value});
    }

    function gravarDados(reserva){
        if(!props.modoEdicao){
            fetch(localRecursos,{
                                    method:'POST',
                                    headers: {'Content-Type':'application/json'},
                                    body: JSON.stringify(reserva)
                                }).then((resposta) => {
                                    if (resposta.ok){
                                        alert("Reserva criada com sucesso");
                                    }
                                });
        }
        else{
            fetch(localRecursos, {
                                    method:"PUT",
                                    headers: {'Content-Type':'application/json'},
                                    body: JSON.stringify(reserva)
            }).then((resposta) => {
                alert("Atualizado com sucesso!");
            });
        }
    }

    function manipularSubmissaoDados(e){
        const meuForm = e.currentTarget;
        if (!meuForm.checkValidity()){
            e.preventDefault();
            e.stopPropagation();
        }
        else{
            gravarDados(reserva);
        }
        setFormularioValido(true);

        return false;
    }
    
    function possuiConteudo(e){
        const componente = e.target;
        if (componente.value === ''){
            componente.setCustomValidity("Erro");
            setFormularioValido(false);
        }
        else{
            componente.setCustomValidity("");
        }
    }

    return (
        <Container>
            <Form noValidate validated={formularioValido} method="GET" action="#" onSubmit={manipularSubmissaoDados}>
                <fieldset className="border bg-light p-3 m-1">
                    <legend>Criar reserva</legend>

                    <Row className="mb-3">
                        <Form.Group as={Col} md="6" controlId="formNome">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Nome completo"
                            id="nome"
                            name="nome"
                            value={reserva.nome}
                            onChange={manipularMudancaFormulario}
                            onBlur={possuiConteudo}
                        />
                        <Form.Control.Feedback></Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="3" controlId="formRG">
                        <Form.Label>RG</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="RG"
                            id="rg"
                            name="rg"
                            value={reserva.rg}
                            onChange={manipularMudancaFormulario}
                            onBlur={possuiConteudo}
                        />
                        <Form.Control.Feedback></Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="3" controlId="formCPF">
                        <Form.Label>CPF</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="CPF"
                            id="cpf"
                            name="cpf"
                            value={reserva.cpf}
                            onChange={manipularMudancaFormulario}
                            onBlur={possuiConteudo}
                        />
                        <Form.Control.Feedback></Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    
                    <Row>
                    <Form.Group className="mb-3" as={Col} md="3" controlId="formRua">
                        <Form.Label>Rua</Form.Label>
                        <Form.Control 
                        required 
                        placeholder="Rua, Avenida" 
                        id="rua"
                        name="rua"
                        value={reserva.rua}
                        onChange={manipularMudancaFormulario}
                        onBlur={possuiConteudo}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" as={Col} md="1" controlId="formEndereco">
                        <Form.Label>Nº</Form.Label>
                        <Form.Control
                        required 
                        placeholder="nº" 
                        id="endnum"
                        name="endnum"
                        value={reserva.endnum}
                        onChange={manipularMudancaFormulario}
                        onBlur={possuiConteudo}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" as={Col} md="3" controlId="formBairro">
                        <Form.Label>Bairro</Form.Label>
                        <Form.Control
                        required
                        placeholder="Bairro" 
                        id="bairro"
                        name="bairro"
                        value={reserva.bairro}
                        onChange={manipularMudancaFormulario}
                        onBlur={possuiConteudo}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" as={Col} md="3" controlId="formCidade">
                        <Form.Label>Cidade</Form.Label>
                        <Form.Control
                        required
                        placeholder="Cidade" 
                        id="cidade"
                        name="cidade"
                        value={reserva.cidade}
                        onChange={manipularMudancaFormulario}
                        onBlur={possuiConteudo}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" as={Col} md="2" controlId="formEstado">
                        <Form.Label>Estado</Form.Label>
                        <Form.Control
                        placeholder="Estado" 
                        required 
                        id="estado"
                        name="estado"
                        value={reserva.estado}
                        onChange={manipularMudancaFormulario}
                        onBlur={possuiConteudo}
                        />
                    </Form.Group>
                    </Row>
                    
                    <Row className="mb-3">
                        <Form.Group as={Col} md="4" controlId="formEmail">
                        <Form.Label>E-mail</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="email@email.com.br"
                            id="email"
                            name="email"
                            value={reserva.email}
                            onChange={manipularMudancaFormulario}
                            onBlur={possuiConteudo}
                        />
                        <Form.Control.Feedback></Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="formTelefone">
                        <Form.Label>Telefone</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="(18) 99999-9999"
                            id="telefone"
                            name="telefone"
                            value={reserva.telefone}
                            onChange={manipularMudancaFormulario}
                            onBlur={possuiConteudo}
                        />
                        <Form.Control.Feedback></Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="formAcomodacao">
                        <Form.Label>Tipo de acomodação</Form.Label>    
                        <select class="form-select" aria-label="Default select example">
                        <option selected value="1">Single</option>
                        <option value="2">Double</option>
                        <option value="3">Deluxe</option>
                        </select>
                        <Form.Control.Feedback></Form.Control.Feedback>
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} md="4" controlId="formDataInicio">
                        <Form.Label>Data de check-in</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="dd/mm/aaaa"
                            id="datainicio"
                            name="datainicio"
                            value={reserva.datainicio}
                            onChange={manipularMudancaFormulario}
                            onBlur={possuiConteudo}
                        />
                        <Form.Control.Feedback></Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="formDataFim">
                        <Form.Label>Data de check-out</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="dd/mm/aaaa"
                            id="datafim"
                            name="datafim"
                            value={reserva.datafim}
                            onChange={manipularMudancaFormulario}
                            onBlur={possuiConteudo}
                        />
                        <Form.Control.Feedback></Form.Control.Feedback>
                        </Form.Group>
                        
                    </Row>

                    <Form.Check
                        label="O hóspede aceita receber promoções por e-mail"
                        feedbackType="invalid"
                    />
                    {/* botões */}
                    <Row className="m-3">
                        <Col xs="4" md={{offset:8}}>
                            <Button variant="secondary" onClick={props.chamarTabela}>Consultar Reservas</Button>{' '}
                            <Button variant="success" type="submit">Criar Reserva</Button>
                        </Col>
                    </Row>
                </fieldset>
            </Form>
        </Container>
    );
}