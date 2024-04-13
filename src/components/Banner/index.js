import React, { useContext } from 'react';
import { CarrinhoContext } from '../../Context/CarrinhoContext';
import { Link } from 'react-router-dom';
import { FaHome, FaPaste, FaShoppingCart } from 'react-icons/fa';
import './Banner.css'

const Banner = () => {
    const { qtdItemCarrinho } = useContext(CarrinhoContext);
    return (
        <header className='cabecalho'>
            <Link className='logo' to="/">
                <img src="imagens/logo-shop.png" alt='Logo Coffee'/>
            </Link> 
            <nav> 
                <ul className='menu-lista'>
                    <li className='item-menu'>
                        <Link className='link-menu' to="/">
                            <FaHome />
                            Home
                        </Link>
                    </li>
                    <li className='item-menu'>
                        <Link className='link-menu' to="/cardapio">
                            Cardápio
                            <FaPaste />                           
                        </Link>
                    </li>
                    <li className='item-menu'>
                        <Link className='link-menu' to="/carrinho">
                            Carrinho
                            <FaShoppingCart />
                            {qtdItemCarrinho > 0 && <span className='badge'>{qtdItemCarrinho}</span>}
                        </Link>
                    </li>
                </ul>
            </nav>         
        </header>
    );
}

export default Banner


