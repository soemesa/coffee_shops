import { Link } from 'react-router-dom';
import Pesquisar from '../Pesquisar'
import './Banner.css'

const Banner = () => {
    return (
        <header className='cabecalho'>
            <Link className='logo' to="/">
                <img src="imagens/logo-shop.png" alt='Logo Coffee'/>
            </Link> 
            < Pesquisar />    
            <nav> 
                <ul className='menu-lista'>
                    <li className='item-menu'><Link to="/">Home</Link></li>
                    <li className='item-menu'><a href="#cardapio">Cardápio</a></li>
                    <li className='item-menu'><a href="#carrinho">Carrinho</a></li>
                    <li className='item-menu'><a href="#lojas">Minha Conta</a></li>
                </ul>
            </nav>       
        </header>


    )
}

export default Banner
