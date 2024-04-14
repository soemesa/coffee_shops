import './Rodape.css';

import {FaMapMarkerAlt, FaRegCalendarAlt, FaRegClock, FaGlobe, FaEnvelope, FaPhoneSquareAlt, FaWhatsapp, FaFacebook, FaInstagram } from 'react-icons/fa';

const Rodape = () => {
    return(
        <footer>
            <div className="container-footer">
                <ul className='footer-lista'>
                    <li className='titulo'>Informação Geral:</li>
                    <li>
                        <FaMapMarkerAlt className="icone-fa"/>
                        <span>Ceilândia, Brasília - DF</span>
                    </li>
                    <li>
                        <FaRegCalendarAlt className="icone-fa"/>
                        <span>De Segunda Feira a Sábado</span>
                    </li>
                    <li>
                        <FaRegClock className="icone-fa"/>
                        <span>Das 9:00 às 21:00</span>
                    </li>
                </ul>

                <ul className='footer-lista'>
                    <li className='titulo'>Contatos:</li>
                    <li>
                        <FaEnvelope className="icone-fa"/>
                        <span>tiarosa@gmail.com</span>
                    </li>
                    <li>
                        <FaPhoneSquareAlt className="icone-fa"/>
                        <span>3303-3333</span>
                    </li>
                    <li>
                        <FaWhatsapp className="icone-fa"/>
                        <span>(61) 93303-3333</span>
                    </li>   
                </ul> 

                <ul className='footer-lista'>
                    <li className='titulo'>Redes Sociais:</li>
                    <li>
                        <FaGlobe className="icone-fa"/>
                        <span>tiarosacoffeeshop.gov.br</span>
                    </li>
                    <li>
                        <FaFacebook className="icone-fa"/>
                        <span>CoffeShop Tia Rosa</span>
                    </li> 
                    <li>
                        <FaInstagram className="icone-fa"/>
                        <span>tiarosa.coffeshop</span>    
                    </li>  
                </ul>
            </div>
            <section className='copyright'>
                <span>
                    &copy; 2024 Coffee Shop Tia Rosa - Todos os direitos reservados - Desenvolvido por Soilenyis Mesa 
                </span>
            </section>  
        </footer>
    )
}

export default Rodape 
