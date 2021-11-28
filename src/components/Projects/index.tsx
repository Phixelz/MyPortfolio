import { Title } from '../Title'

import styles from './styles.module.scss'

export function Projects() {
  return (
    <section className={styles.wrapper} id="projects">
      <Title
        title="Projetos"
        subtitle="02. Meus Projetos"
        description="Abaixo é possível visualizar alguns projetos de aplicações desenvolvidos por mim"
      />

      <ul>
        <li>
        <a href="">
          <h3>Learn App</h3>
          <p>Projeto mobile com objetivo de fornecer cursos com preços acessíveis, utilizando pontos para obtenção de novos cursos.</p>
          </a>
        </li>
        
        <li>
        <a href="">
          <h3>Camper App</h3>
          <p>Aplicativo para campistas que utiliza geolocalização para encontrar áreas de campings com rotas, preços, e comodidades do local.</p>
          </a>
        </li>
        <li>
        <a href="">
          <h3>Mirror Analytic</h3>
          <p>Aplicação mobile com foco em planejamento financeiro com ênfase em cálculo de dividendos.</p>
          </a>
        </li>
        <li>
        <a href="">
          <h3>Big Bus</h3>
          <p>Case de estudo com objetivo de melhorar a experiência do usuário na busca pelo melhor trajeto, utilizando o transporte público.</p>
          </a>
        </li>
        <li>
        <a href="">
          <h3>Go Travel</h3>
          <p>Projeto voltado para criação de roteiros de viagens, incluindo pontos de interesse, pontos gastronômicos e atrações.</p>
          </a>
        </li>
        <li>
        <a href="">
          <h3>My Portfolio (Git)</h3>
          <p>Portfólio desemvolvido em Next.js </p>
          </a>
        </li>
      </ul>
    </section>
  )
}