import './Footer.css'

import {
  FaWhatsapp,
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
} from 'react-icons/fa'

import {
  FiMail,
  FiMapPin,
} from 'react-icons/fi'

function Footer() {
  return (
    <footer className='footer'>

      <div className='container'>

        <div className='footer-top'>

          <div className='footer-column footer-brand'>

            <h2>
              Gledson
              <span> Engenharia</span>
            </h2>

            <p>
              Soluções técnicas especializadas em
              laudos, perícias, avaliações imobiliárias
              e inspeções prediais.
            </p>

            <div className='footer-socials'>

              <a
                href='/'
                target='_blank'
                rel='noreferrer'
              >
                <FaInstagram />
              </a>

              <a
                href='/'
                target='_blank'
                rel='noreferrer'
              >
                <FaLinkedinIn />
              </a>

              <a
                href='/'
                target='_blank'
                rel='noreferrer'
              >
                <FaFacebookF />
              </a>

              <a
                href='https://wa.me/5500000000000'
                target='_blank'
                rel='noreferrer'
              >
                <FaWhatsapp />
              </a>

            </div>

          </div>

          <div className='footer-column'>

            <h3>Navegação</h3>

            <ul>

              <li>
                <a href='/'>
                  Início
                </a>
              </li>

              <li>
                <a href='/'>
                  Serviços
                </a>
              </li>

              <li>
                <a href='/'>
                  Sobre
                </a>
              </li>

              <li>
                <a href='/'>
                  Contato
                </a>
              </li>

            </ul>

          </div>

          <div className='footer-column'>

            <h3>Serviços</h3>

            <ul>

              <li>Laudos Técnicos</li>

              <li>Perícias Judiciais</li>

              <li>Avaliação de Imóveis</li>

              <li>Inspeções Prediais</li>

            </ul>

          </div>

          <div className='footer-column'>

            <h3>Contato</h3>

            <ul className='footer-contact'>

              <li>

                <FiMail />

                <span>
                  contato@gledsonengenharia.com
                </span>

              </li>

              <li>

                <FaWhatsapp />

                <span>
                  (61) 99999-9999
                </span>

              </li>

              <li>

                <FiMapPin />

                <span>
                  Brasília • GO e Região
                </span>

              </li>

            </ul>

          </div>

        </div>

        <div className='footer-bottom'>

          <p>
            © {new Date().getFullYear()} Gledson Engenharia.
            Todos os direitos reservados.
          </p>

        </div>

      </div>

    </footer>
  )
}

export default Footer