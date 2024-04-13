import { useState } from "react";
import Banner from "../../components/Banner"
import CarrinhoItems from "../../components/CarrinhoItems"
import Rodape from "../../components/Rodape";



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

