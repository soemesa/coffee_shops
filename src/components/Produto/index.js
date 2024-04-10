import './Produto.css'

import { Link } from 'react-router-dom';

const Produto = ({ id, descricao, preco, quantidadeEstoque, imagem }) => {
    return (
        <section className='produto-lista'>
            <div className="produto-card">
                <img className="produto-img" src={imagem} alt={descricao} />
                <div className="produto-info">
                    <h2 className="produto-descricao">{descricao}</h2>
                    <p className="produto-preco">{preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                    <p className="produto-estoque">Estoque: {quantidadeEstoque}</p>
                    <Link className='logo' to="/carrinho">
                        <button className="produto-botao-carrinho">Adicionar ao Carrinho</button>
                    </Link> 
                    <Link className='logo' to="/compras">
                        <button className="produto-botao-comprar">Comprar</button>
                    </Link>
                </div>
            </div>
        </section>
    );
  }
  
  export default Produto;
