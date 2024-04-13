
import { useContext } from "react";
import './CardapioProdutos.css'
import cafes from "../../produtosdb"
import { CarrinhoContext } from "../../Context/CarrinhoContext";

const CardapioProdutos = () => {
    const {carrinhoItem, setCarrinhoItem, setQtdItemCarrinho} = useContext(CarrinhoContext);


    const handleAdicionarCarrinho = (id) => {
        const cafe = cafes.find(cafe => cafe.id === id)
        const itemExistente = carrinhoItem.find(item => item.produto.id === id);

        if (itemExistente) {
            const carrinhoAtualizado = carrinhoItem.map(item => 
                item.produto.id === id ? {...item, quantity: item.quantity + 1} : item
            );
            setCarrinhoItem(carrinhoAtualizado);
        } else {
            const carrinhoProps = {
                produto: cafe,
                quantity: 1,
            };
            const novoItemCarrinho = [...carrinhoItem, carrinhoProps];
            setCarrinhoItem(novoItemCarrinho);
        }  
        setQtdItemCarrinho(prevQuantidade => prevQuantidade + 1);
}
    return(
        <div>
            <div className="container-cardapio">
                <div className="produto">
                    {cafes.map(cafe => ( 
                        <div key={cafe.id} className="produto-card">
                            <img className="produto-imagem" src={cafe.imagem} alt="imagem do produto"/>
                            <div className="produto-info">
                                <h2 className="produto-nome">{cafe.nome}</h2>
                                <p className="produto-preco">R${cafe.preco}</p>
                                <button className="botao-carrinho" onClick={() => handleAdicionarCarrinho(cafe.id)}>Adicionar ao carrinho</button>
                            </div>
                        </div>    
                    ))}
                </div>    
            </div>

        </div> 
    )

}
export default CardapioProdutos 

