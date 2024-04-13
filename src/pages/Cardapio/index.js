//import produtos from "../../produtosdb.js";

import Banner from "../../components/Banner"
import CardapioProdutos from "../../components/CardapioProdutos"
import Rodape from "../../components/Rodape"


const Cardapio = () => {
    return(
            <div className="cardapio-container">
                <Banner />
                <CardapioProdutos />
                <Rodape /> 
            </div>     
    )
}

export default Cardapio

