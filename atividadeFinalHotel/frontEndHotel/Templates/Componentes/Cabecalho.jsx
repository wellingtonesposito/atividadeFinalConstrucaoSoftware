import '../estilos/cabecalho.css';

export default function Cabecalho(props){
    return (
        <div className="cabecalho p-1">           
            <div className="titulo">
                <h1>{props.titulo}</h1>
            </div>
        </div>
    );
}
