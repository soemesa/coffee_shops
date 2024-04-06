import Pesquisar from '../Pesquisar'
import './Banner.css'

const Banner = () => {
    return (
        <header className='cabecalho'> 
            <a className='logo' href='index.html'>   
                <img src="imagens/1.png" alt='Logo Coffee'/>
            </a>
            < Pesquisar />    
            <nav> 
                <ul className='menu-lista'>
                    <li className='item-menu'><a href="#home">Home</a></li>
                    <li className='item-menu'><a href="#cardapio">Cardápio</a></li>
                    <li className='item-menu'><a href="#carrinho">Carrinho</a></li>
                    <li className='item-menu'><a href="#lojas">Minha Conta</a></li>
                </ul>
            </nav>
                    
        </header>


    )
}

export default Banner

//<img src="imagens/coffee_logo.png" alt='Logo Coffee'/>
                
//<img src="imagens/Logo-coffe-shop1.png" alt='Coffee Shop'/>
//<img src="imagens/logo-coffee-shop2.png" alt='Coffee Shop'/>