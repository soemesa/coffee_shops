import './Produtos.css'

import Produto from "../Produto"

 
const Produtos = ({ produtos }) => {
    return (
        <section className="produtos">
            {produtos.map(produto => (
                <Produto 
                    key={produto.id}
                    id={produto.id}
                    descricao={produto.descricao}
                    preco={produto.preco}
                    quantidadeEstoque={produto.quantidadeEstoque}
                    imagem={produto.imagem}   
                />     
            ))}
        </section>
    );
}

export default Produtos
