import {MongoClient, ObjectId} from 'mongodb';

import Reserva from '../modelo/reserva.js';

const uriBancoDados = "mongodb://localhost:27017";
const baseDados = 'AulaLP1';
const colecao = "Reserva";

export default class ReservaDB{

    constructor(){
        this.reservaMongo = new MongoClient(uriBancoDados);
    }

    async incluirReserva(reserva){
        if (reserva instanceof Reserva){
            try{
                await this.reservaMongo.connect();
                const resultado = await this.reservaMongo.db(baseDados).collection(colecao).insertOne({
                                                                                                        "nome" : reserva.nome,
                                                                                                        "rg" : reserva.rg,
                                                                                                        "cpf" :reserva.cpf,
                                                                                                        "rua" : reserva.rua,
                                                                                                        "endnum" : reserva.endnum,
                                                                                                        "bairro" : reserva.bairro,
                                                                                                        "cidade" : reserva.cidade,
                                                                                                        "estado" : reserva.estado,
                                                                                                        "email" : reserva.email,
                                                                                                        "telefone" : reserva.telefone,
                                                                                                        "datainicio" : reserva.datainicio,
                                                                                                        "datafim" : reserva.datafim,
                                                                                                        });
                reserva.id = resultado.insertedId.toString();
                return resultado.insertedId.toString();

            }catch(e){
                console.error(e);
            }
            finally{
                this.reservaMongo.close();
            }
        }
    }

    async atualizarReserva(reserva){
        if (reserva instanceof Reserva){
            try{
                await this.reservaMongo.connect();
                const identificador = new ObjectId(reserva.id);
                const resultado = await this.reservaMongo.db(baseDados).collection(colecao).updateOne({'_id':identificador},{"$set":reserva.toJSON()});
                if (resultado.modifiedCount > 0){
                    return {
                        "resultado": true
                    }
                }
                else{
                    return {
                        "resultado":false
                    }
                }
            }catch(e){
                console.error(e);
            }finally{
                this.reservaMongo.close();
            }
        }
    }

    async excluirReserva(reserva){
        if (reserva instanceof Reserva){
            try{
                await this.reservaMongo.connect();
                const identificador = new ObjectId(reserva.id);
                const resultado = await this.reservaMongo.db(baseDados).collection(colecao)
                .deleteOne({'_id':identificador});
                if (resultado.deletedCount > 0){
                    return {
                        "resultado":true
                    }
                }
                else{
                    return {
                        "resultado":false
                    }
                }
            }catch(e){
                console.error(e);
            }finally{
                this.reservaMongo.close();
            }
        }
    }

    async consultarReservaID(id){
        try{
            await this.reservaMongo.connect();
            const identificador = new ObjectId(id);
            const resultadoBusca = await this.reservaMongo.db(baseDados).collection(colecao)
            .findOne({"_id":identificador});
            if (resultadoBusca){
                const reservaBuscada = new Reserva(resultadoBusca._id,
                                                   resultadoBusca.nome,
                                                   resultadoBusca.rg,
                                                   resultadoBusca.cpf,
                                                   resultadoBusca.rua,
                                                   resultadoBusca.endnum,
                                                   resultadoBusca.bairro,
                                                   resultadoBusca.cidade,
                                                   resultadoBusca.estado,
                                                   resultadoBusca.email,
                                                   resultadoBusca.telefone,
                                                   resultadoBusca.datainicio,
                                                   resultadoBusca.datafim
                                                   );
                return reservaBuscada;
            } 
        }catch(e){
            console.error(e);
        }finally{
            this.reservaMongo.close();
        }
    }

    async consultarReservaNome(nome){
        try{
            await this.reservaMongo.connect();
            const cursor = this.reservaMongo.db(baseDados).collection(colecao)
            .find({"nome":{"$regex":nome}});
            const resultados = await cursor.toArray();
            let listaReserva = [];
            if (resultados){
                resultados.forEach((resultado) => {
                    const reserva = new Reserva(resultado._id,
                                                resultado.nome,
                                                resultado.rg,
                                                resultado.cpf,
                                                resultado.rua,
                                                resultado.endnum,
                                                resultado.bairro,
                                                resultado.cidade,
                                                resultado.estado,
                                                resultado.email,
                                                resultado.telefone,
                                                resultado.datainicio,
                                                resultado.datafim);
                    listaReserva.push(reserva);
                });
            }
            return listaReserva;

        }catch(e){
            console.error(e);
        }finally{
            this.reservaMongo.close();
        }
    }
}