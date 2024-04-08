import Banner from "../../components/Banner";
import Body from "../../components/Body";
import Rodape from "../../components/Rodape"
import Copyright from "../../components/Copyright"


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