
import './Rodape.css';

import {FaMapMarkerAlt, FaRegCalendarAlt, FaRegClock, FaGlobe, FaEnvelope, FaPhoneSquareAlt, FaWhatsapp, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Rodape = () => {
    return(
        <footer>
            <div className="footer">
                <ul className='endereco'>
                    <li className='titulo'>Informação Geral:</li>
                    <li>
                        <FaMapMarkerAlt />
                        <span>Ceilândia, Brasília - DF</span>
                    </li>
                    <li>
                        <FaRegCalendarAlt />
                        <span>De Segunda Feira a Sábado</span>
                    </li>
                    <li>
                        <FaRegClock />
                        <span>Das 9:00 às 21:00</span>
                    </li>
                </ul>

                <ul className='contato'>
                    <li className='titulo'>Contatos:</li>
                    <li>
                        <FaEnvelope />
                        <span>tiarosa@gmail.com</span>
                    </li>
                    <li>
                        <FaPhoneSquareAlt/>
                        <span>3303-3333</span>
                    </li>
                    <li>
                        <FaWhatsapp />
                        <span>(61) 93303-3333</span>
                    </li>   
                </ul> 

                <ul className='redes-sociais'>
                    <li className='titulo'>Redes Sociais:</li>
                    <li>
                        <FaGlobe/>
                        <span>tiarosacoffeeshop.gov.br</span>
                    </li>
                    <li>
                        <FaFacebook />
                        <span>CoffeShop Tia Rosa</span>
                    </li> 
                    <li>
                        <FaInstagram />
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
