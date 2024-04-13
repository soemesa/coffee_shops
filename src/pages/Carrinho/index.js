import { useState } from "react";
import Banner from "../../components/Banner"
import Rodape from "../../components/Rodape"
import CarrinhoItems from "../../components/CarrinhoItems"



const Carrinho = ( ) => {
    const [carrinhoItem, setCarrinhoItem] = useState([]);
    return(
        <div>
            < Banner />
            <CarrinhoItems carrinhoItem={carrinhoItem} setCarrinhoItem={setCarrinhoItem} />        
            <Rodape /> 
        </div> 
               
    )
}
export default Carrinho

