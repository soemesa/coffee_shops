import React, { useState, useContext } from "react";
import { CarrinhoContext } from "../../Context/CarrinhoContext";
import './CompraResumo.css';
import { Link } from "react-router-dom";

const CompraResumo = () => {
    const {carrinhoItem, setCarrinhoItem} = useContext(CarrinhoContext);
    const [pagamento, setPagamento] = useState('');
    const [entrega, setEntrega] = useState('');

    const handleFinalizarCompra = () => {
        alert('Compra finalizada com sucesso!');
        setCarrinhoItem([]); 
    }

    const total = carrinhoItem.reduce((total, item) => total + (item.quantity * item.produto.preco), 0);
    const totalComTaxa = entrega === 'delivery' ? total + 5 : total;
    const totalComTaxaEServico = totalComTaxa + 0.99;
    const taxa = entrega === 'delivery' ? 5 : 0;

    return (
        <div className="container">
            <div className="card">
            <form onSubmit={handleFinalizarCompra} className="form">
                <label>
                    Forma de pagamento:
                    <div onChange={(e) => setPagamento(e.target.value)} className="radio-group">
                        <input type="radio" value="credito" name="pagamento" required /> Crédito
                        <input type="radio" value="debito" name="pagamento" required /> Débito
                    </div>
                </label>
                <label>
                    Tipo de entrega:
                    <div onChange={(e) => setEntrega(e.target.value)} className="radio-group">
                        <input type="radio" value="retirar" name="entrega" required /> Retirar na loja 
                        <input type="radio" value="delivery" name="entrega" required /> Delivery
                    </div>
                </label> 
                <ul className="resumo">
                    <li><h3>Resumo de valores</h3></li>
                    <li>Subtotal: R${total}</li>
                    <li>Taxa de entrega: R${taxa}</li>
                    <li>Taxa de serviço: R$ 0.99</li>
                    <li><h3>Valor Total: R$ {totalComTaxaEServico}</h3></li>
                </ul>
                <Link to="/cardapio">
                    <button type="submit" className="button" onClick={handleFinalizarCompra}>Finalizar Compra</button>
                </Link>
            </form>
            </div>
        </div>
    )
}

export default CompraResumo;