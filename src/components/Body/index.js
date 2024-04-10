
import Sobre from '../Sobre'
import './Body.css'


const Body = () => {
    return (
        <body className='conteudo-body'>
            <button className='botao-login'>Login</button>
            <button className='botao-registrar'>Registrar-se</button>
            <h1 className='h1'>Viva sua melhor vida de café</h1>
            <h5>Nós não só fazemos seu café. Nós fazemos o seu dia.</h5>
            <img src="imagens/Modern-Coffee.png" alt='Background Body'/>
            <Sobre />
        </body>

    )
  
}

export default Body
