import '../estilos/menu.css';
import {Link} from 'react-router-dom';

export default function Menu(props){
    return (
        <div className="menu">
            <ul>
                {
                    props.itens.map(({rotulo, url}, i) => {
                        return <li key={i}><Link to={url}>{rotulo}</Link></li>    
                    })
                }
            </ul>
        </div>
    );
}
