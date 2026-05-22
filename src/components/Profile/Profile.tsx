import './Profile.css'

import {
  FiAward,
  FiCheckCircle,
  FiTrendingUp,
  FiShield,
} from 'react-icons/fi'

import { motion } from 'framer-motion'

function Profile() {
  return (
    <section className='profile'>

      <div className='container profile-container'>

        <motion.div
  className='profile-image-wrapper'
  initial={{
    opacity: 0,
    x: -100,
  }}
  whileInView={{
    opacity: 1,
    x: 0,
  }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{
    duration: 1,
    ease: 'easeOut',
  }}
>

          <div className='profile-image'>

            <img
              src='https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1200&auto=format&fit=crop'
              alt='Engenheiro Civil'
            />

          </div>

          <div className='profile-experience'>

            <strong>20+</strong>

            <span>
              Anos de
              experiência
            </span>

          </div>

       </motion.div>

     <motion.div
  className='profile-content'
  initial={{
    opacity: 0,
    x: 100,
  }}
  whileInView={{
    opacity: 1,
    x: 0,
  }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{
    duration: 1,
    ease: 'easeOut',
  }}
>

          <span className='profile-badge'>
            Especialista em Engenharia
          </span>

          <h2>
            Gledson,
            <span className='profile-title-highlight'>
              Engenheiro Civil
            </span>
            e Consultor Estratégico.
          </h2>

          <p>
            Atuação técnica especializada em laudos,
            perícias, avaliações imobiliárias e inspeções
            prediais com foco em segurança, precisão
            documental e conformidade.
          </p>

          <div className='profile-items'>

            <div className='profile-item'>

              <FiAward />

              <div>

                <strong>
                  Formação Acadêmica
                </strong>

                <span>
                  Engenharia Civil e especializações
                  voltadas para perícias e gestão.
                </span>

              </div>

            </div>

            <div className='profile-item'>

              <FiTrendingUp />

              <div>

                <strong>
                  Visão Estratégica
                </strong>

                <span>
                  Soluções voltadas para eficiência,
                  controle técnico e resultados reais.
                </span>

              </div>

            </div>

            <div className='profile-item'>

              <FiShield />

              <div>

                <strong>
                  Segurança Técnica
                </strong>

                <span>
                  Laudos e pareceres elaborados com
                  responsabilidade e rigor técnico.
                </span>

              </div>

            </div>

            <div className='profile-item'>

              <FiCheckCircle />

              <div>

                <strong>
                  Atendimento Especializado
                </strong>

                <span>
                  Acompanhamento técnico personalizado
                  em todas as etapas do processo.
                </span>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  )
}

export default Profile