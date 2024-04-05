import './Banner.css'

const Banner = () => {
    return (
        <header className='cabecalho'>
                <a className='titulo' href='index.html'>
                    <img class="logo" src="imagens/coffee_logo.png" alt='Logo Coffee'/>
                </a>
                <h3 className='nome-titulo'>Coffee Shop Tia Rosa</h3>
            
            <nav> 
                <ul className='menu-lista'>
                    <li className='item-menu'><a href="#home">Home</a></li>
                    <li className='item-menu'><a href="#cardapio">Cardápio</a></li>
                    <li className='item-menu'><a href="#carrinho">Carrinho</a></li>
                    <li className='item-menu'><a href="#lojas">Nossas lojas</a></li>
                </ul>
            </nav>
         
        </header>
    )
}

export default Banner