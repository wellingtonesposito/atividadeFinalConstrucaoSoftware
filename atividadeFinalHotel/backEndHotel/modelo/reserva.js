export default class Reserva{

    #id
    #nome
    #rg
    #cpf
    #rua
    #endnum
    #bairro
    #cidade
    #estado
    #email
    #telefone
    #datainicio
    #datafim

    constructor(id, nome, rg, cpf, rua, endnum, bairro, cidade, estado, email, telefone, datainicio, datafim){
        this.#id = id;
        this.#nome = nome;
        this.#rg = rg;
        this.#cpf = cpf;
        this.#rua = rua;
        this.#endnum = endnum;
        this.#bairro = bairro;
        this.#cidade = cidade;
        this.#estado = estado;
        this.#email = email;
        this.#telefone = telefone;
        this.#datainicio = datainicio;
        this.#datafim = datafim;
    }

    get id(){
        return this.#id;
    }
    
    set id(novoId){
        this.#id = novoId;
    }

    get nome(){
        return this.#nome;
    }

    set nome(novoNome){
        this.#nome = novoNome;
    }
    get rg(){
        return this.#rg;
    }

    set rg(novoRg){
        this.#rg = novoRg;
    }

    get cpf(){
        return this.#cpf;
    }

    set cpf(novoCpf){
        this.#cpf = novoCpf;
    }

    get rua(){
        return this.#rua;
    }

    set rua(novaRua){
        this.#rua = novaRua;
    }

    get endnum(){
        return this.#endnum;
    }

    set endnum(novoEndnum){
        this.#endnum = novoEndnum;
    }

    get bairro(){
        return this.#bairro;
    }

    set bairro(novoBairro){
        this.#bairro = novoBairro;
    }

    get cidade(){
        return this.#cidade;
    }

    set cidade(novaCidade){
        this.#cidade = novaCidade;
    }

    get estado(){
        return this.#estado;
    }

    set estado(novoEstado){
        this.#estado = novoEstado;
    }

    get email(){
        return this.#email;
    }

    set email(novoEmail){
        this.#email = novoEmail;
    }

    get telefone(){
        return this.#telefone;
    }

    set telefone(novoTelefone){
        this.#telefone = novoTelefone;
    }

    get datainicio(){
        return this.#datainicio;
    }

    set datainicio(novaDatainicio){
        this.#datainicio = novaDatainicio;
    }

    get datafim(){
        return this.#datafim;
    }

    set datafim(novaDatafim){
        this.#datafim = novaDatafim;
    }

    toJSON(){
        return {
            "id" : this.#id,
            "nome" : this.#nome,
            "rg": this.#rg,
            "cpf" : this.#cpf,
            "rua": this.#rua,
            "endnum" : this.#endnum,
            "bairro" : this.#bairro,
            "cidade" : this.#cidade,
            "estado" : this.#estado,
            "email" : this.#email,
            "telefone" : this.#telefone,
            "datainicio" : this.#datainicio,
            "datafim" : this.#datafim,          
        }
    }
}