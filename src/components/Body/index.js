
import { Link } from 'react-router-dom'
import './Body.css'


const Body = () => {
    return (
        <body className='conteudo-body'>
            <div className='body-banner'>
                <Link to='/cardapio'>
                    <button className='botao-ir-cardapio'>Ver Cardápio</button>
                </Link>
                <h1 className='h1'>Viva sua melhor vida de café</h1>
                <h5>Nós não só fazemos seu café. Nós fazemos o seu dia.</h5>
                <img src="imagens/Modern-Coffee.png" alt='Background Body'/>
            </div>
            <div className='container-sobre'>
                <h1 className='titulo-sobre'>
                    Um pouco da Nossa História
                </h1>
                <p>
                    O Cofee Shop Tia Rosa surgiu para proporcionar momentos de cumplicidade e alegria no dia a dia das pessoas. 
                    Para os apreciadores de um bom café, que também buscam o aconchego de um local sofisticado e intimista, 
                    a cafeteria é o lugar perfeito. Hoje o Cofee Shop Tia Rosa é referência de qualidade, luxo e sofisticação, 
                    trata-se de um ambiente único, com características próprias, receitas exclusivas e arte na apresentação 
                    dos produtos.
                </p>
                <p>
                    Com investimentos contínuos em equipamentos, treinamentos de equipe e desenvolvimento de produtos, o foco 
                    da empresa está em se consolidar como um ambiente singular e exclusivo, trazendo aos seus clientes o 
                    conceito totalmente diferente do que já existe no mercado. A marca é notoriedade em todo território nacional 
                    e também vem se destacando no mercado internacional com a expansão para o Canadá em 2018, trazendo consigo a
                    trajetória de muito trabalho, investimentos e dedicação, com o negócio em si, e acima de tudo com o cliente, 
                    que a cada dia retorna com a certeza da escolha certa.
                </p>
            </div>
        </body>

    )
  
}

export default Body
