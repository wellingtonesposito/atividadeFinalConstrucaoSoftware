import Cabecalho from './Componentes/Cabecalho';
import Menu from './Componentes/Menu';
import './estilos/pagina.css';

export default function Pagina(props){
    return (
        <div>
            <Cabecalho titulo="Stars Hotel"/>
            <div className="corpo">
                <aside>
                    <Menu itens={[
                        {rotulo:"Criar Reserva", url:"/reserva"}
                    ]}/>
                </aside>
                <div className="conteudo">
                    {props.children}    
                </div>
            </div>
        </div>
    );
}
