import Banner from "../../components/Banner";
import Body from "../../components/Body";
import Rodape from "../../components/Rodape"



const PaginaPrincipal = () => {
    return(
        <div className='container-home'>
            < Banner/>
            < Body/>
            < Rodape />
        </div> 
    );
}

export default PaginaPrincipal