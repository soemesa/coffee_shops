import React, { createContext, useState } from 'react';

export const CarrinhoContext = createContext();

export const CarrinhoProvider = ({ children }) => {
    const [carrinhoItem, setCarrinhoItem] = useState([]);
    const [qtdItemCarrinho, setQtdItemCarrinho] = useState(0);

    return (
        <CarrinhoContext.Provider value={{carrinhoItem, setCarrinhoItem, qtdItemCarrinho, setQtdItemCarrinho}}>
            {children}
        </CarrinhoContext.Provider>
    );
};