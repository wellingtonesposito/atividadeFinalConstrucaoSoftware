import Pagina from "./Templates/Pagina";
import TelaCadastroReserva from "./Formularios/TelaCadastroReserva";


export function PaginaReserva(props){
    return (
        <Pagina>
            <TelaCadastroReserva/>
        </Pagina>
    );
}

export function Pagina404(props){
    return (
        <Pagina>
            <p>Página não encontrada!</p>
        </Pagina>
    );
}
