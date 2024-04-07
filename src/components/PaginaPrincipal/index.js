import './PaginaPrincipal.css';
import Banner from '../Banner';
import Body from '../Body';
import Rodape from '../Rodape';


const PaginaPrincipal = () => {
    return(
        <div className='container'>
            < Banner/>
            < Body/>
            < Rodape />
        </div>
        
    );

}

export default PaginaPrincipal