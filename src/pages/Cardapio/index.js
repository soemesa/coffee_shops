import Banner from "../../components/Banner"
import Produtos from "../../components/Produtos"

import produtos from "../../produtosdb.js";

const Cardapio = () => {
    return(
        <div>
            <Banner />
            <Produtos produtos={produtos}/>
        </div>
    )
}

export default Cardapio

