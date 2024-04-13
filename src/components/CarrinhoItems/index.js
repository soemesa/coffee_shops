
import React, { useContext, useEffect } from "react";
import { CarrinhoContext } from "../../Context/CarrinhoContext";
import { FaRegTrashAlt } from 'react-icons/fa';
import './CarrinhoItems.css'
import { Link } from "react-router-dom";

const CarrinhoItems = () => {
    const {carrinhoItem, setCarrinhoItem, setQtdItemCarrinho} = useContext(CarrinhoContext);     

        useEffect(() => { 
            const carrinhoData = localStorage.getItem('carrinho');
            if(carrinhoData){
                setCarrinhoItem(JSON.parse(carrinhoData))
            }     
        }, [setCarrinhoItem]);

        useEffect(() => {
            localStorage.setItem('carrinho', JSON.stringify(carrinhoItem));
        }, [carrinhoItem])

    const handleRemoverCarrinho = (id) => {
        const CarrinhoRemove = carrinhoItem.filter(item => item.produto.id !== id);
        setCarrinhoItem(CarrinhoRemove);
        setQtdItemCarrinho(prevQuantidade => prevQuantidade - 1);

    }

    const handleAlterarQuantidade = (id, quantidade) => {
        const novaLista = carrinhoItem.map(item => {
            if (item.produto.id === id) {
                return { ...item, quantity: Number(quantidade) };
            } else {
                return item;
            }
        });
        setCarrinhoItem(novaLista);
    }

    return (
        <div className="container-carrinho">
            <div className="carrinho">
                {carrinhoItem.map(item => ( 
                    <div key={item.produto.id} className="carrinho-card">
                        <img className="carrinho-imagem" src={item.produto.imagem} alt="imagem do produto"/>
                        <div className="carrinho-info">
                            <p className="carrinho-nome">{item.produto.nome}</p>
                            <p className="carrinho-preco">Preço: R${item.produto.preco}</p>
                            <div className='carrinho-quantity'>
                                <label>Quantidade: </label>
                                <input type="number" min="1" value={item.quantity} onChange={(e) => handleAlterarQuantidade(item.produto.id, e.target.value)} />
                            </div>
                            <p>R${item.quantity * item.produto.preco}</p>
                            <button className='botao-remover' onClick={() => handleRemoverCarrinho(item.produto.id)}>
                                <FaRegTrashAlt />
                            </button>
                        </div>  
                    </div>                 
                ))}
                {carrinhoItem.length > 0 && (
                    <div className='total-comprar'>
                        <h2>Total: R${carrinhoItem.reduce((total, item) => total + (item.quantity * item.produto.preco), 0)}</h2>
                        <Link to="/compras">
                            <button>Comprar</button>
                        </Link>  
                    </div>
                )}
            </div>    
        </div>
    )
}

export default CarrinhoItems

