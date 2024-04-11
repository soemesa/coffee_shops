import React, { useState } from 'react';

import './Produto.css'

import { Link } from 'react-router-dom';


const Produto = ({ id, nome, preco, quantidadeEstoque, imagem }) => {
    const [produtoSelecionado, setProdutoSelecionado] = useState(null);

    const adicionarAoCarrinho = () => {
        console.log('Produto selecionado:', id)
        setProdutoSelecionado(id);
    }
    
    return (
        <section className='produto-lista'>
            <div className="produto-card">
                <img className="produto-img" src={imagem} alt={nome} />
                <div className="produto-info">
                    <h2 className="produto-descricao">{nome}</h2>
                    <p className="produto-preco">{preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                    <p className="produto-estoque">Estoque: {quantidadeEstoque}</p>
                    <button className="produto-botao-carrinho" onClick={adicionarAoCarrinho}>Adicionar ao Carrinho</button>                
                  
                    <Link className='logo' to="/compras">
                        <button className="produto-botao-comprar">Comprar</button>
                    </Link>
                </div>
            </div>
        </section>
    ); 
  }
  
  export default Produto;

  /*   <Link className='logo' to="/carrinho">
                        <button className="produto-botao-carrinho" onClick={adicionarAoCarrinho}>Adicionar ao Carrinho</button>
                    </Link> 
                    */