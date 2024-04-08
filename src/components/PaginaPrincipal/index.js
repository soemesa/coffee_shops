import './PaginaPrincipal.css';
import Banner from '../Banner';
import Body from '../Body';
import Rodape from '../Rodape';
import Copyright from '../Copyright';


const PaginaPrincipal = () => {
    return(
        <div className='container'>
            < Banner/>
            < Body/>
            < Rodape />
            < Copyright />
        </div>
        
    );

}

export default PaginaPrincipal