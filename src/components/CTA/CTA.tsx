import './CTA.css'

import { FaWhatsapp } from 'react-icons/fa'

function CTA() {
  return (
    <section className='cta'>

      <div className='container'>

        <div className='cta-box'>

          <span className='cta-badge'>
            Atendimento Especializado
          </span>

         <h2>
  Deixe a
  <span className='cta-title-highlight'>
    complexidade </span>
  burocrática conosco.
</h2>

          <p>
            Entre em contato agora mesmo e receba
            suporte técnico especializado para laudos,
            perícias, avaliações e regularizações.
          </p>

          <a
            href='https://wa.me/5500000000000'
            target='_blank'
            rel='noreferrer'
            className='cta-button'
          >
            <FaWhatsapp />
            Solicitar Orçamento
          </a>

        </div>

      </div>

    </section>
  )
}

export default CTA