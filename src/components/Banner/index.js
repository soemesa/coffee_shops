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
                    <li className='item-menu'><Link to="/cardapio">Cardápio</Link></li>
                    <li className='item-menu'><Link to="/carrinho">Carrinho</Link></li>
                    <li className='item-menu'><Link to="/usuario">Usuário</Link></li>
                </ul>
            </nav>         
        </header>
    );
}

export default Banner


