import React from 'react';


const ItemCarrinho = ({ produtoSelecionadoId }) => {
    return (
        <div className="item-carrinho-container">
            <p>ID do produto selecionado: {produtoSelecionadoId}</p>
            {/* Outros elementos do carrinho */}
        </div>
    );
}

export default ItemCarrinho;