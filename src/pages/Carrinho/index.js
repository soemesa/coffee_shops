import React, { useState } from "react";
import Banner from "../../components/Banner"
import ItemCarrinho from "../../components/ItemCarrinho";
import Produto from "../../components/Produto";

const Carrinho = ( ) => {
  

    return(
        <div>
            < Banner />
            <h1>Bem-vindo ao Carrinho!</h1>
            
        </div>
    )
}

export default Carrinho

/** key={produto.id}
                    id={produto.id}
                    nome={produto.nome}
                    preco={produto.preco}
                    quantidadeEstoque={produto.quantidadeEstoque}
                    imagem={produto.imagem}   */