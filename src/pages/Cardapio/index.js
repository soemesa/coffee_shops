//import produtos from "../../produtosdb.js";

import Banner from "../../components/Banner"
import CardapioProdutos from "../../components/CardapioProdutos"
import Rodape from "../../components/Rodape"


const Cardapio = () => {
    return(
            <div className="cardapio-container">
                <Banner />
                <h2>Bem-vindo ao Cardapio!</h2>
                <CardapioProdutos />
                <Rodape /> 
            </div>     
    )
}

export default Cardapio

