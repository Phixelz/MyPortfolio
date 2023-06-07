import { Title } from "../Title";

import styles from "./styles.module.scss";

export function Projects() {
  return (
    <div className={styles.container}>
      <section className={styles.wrapper} id="projects">
        <Title
          title="Projetos"
          subtitle="02. Meus Projetos"
          description="Alguns estudos de casos com o objetivo de resolver problemas de cenários específicos."
        />

        <ul>
          <li>
            <a href="">
              <h3>Case Study - Learn App (UX)</h3>
              <p>
                Projeto mobile com objetivo de fornecer cursos com preços
                acessíveis, utilizando gamificação para obtenção de novos cursos.
              </p>
            </a>
          </li>
          <li>
            <a href="">
              <h3>Case Study - Acampe App (UX)</h3>
              <p>
                Aplicativo para campistas que utiliza geolocalização para
                encontrar áreas de campings com rotas, preços e comodidades do
                local.
              </p>
            </a>
          </li>
          <li>
            <a href="">
              <h3>Case Study - Mirror Investments (UX)</h3>
              <p>
                Aplicativo focado em planejamento financeiro e ênfase em cálculo
                de dividendos.
              </p>
            </a>
          </li>
          <li>
            <a href="">
              <h3>Case Study - Big Bus (UX)</h3>
              <p>
                Case de estudo com objetivo de melhorar a experiência do usuário
                na busca pelo melhor trajeto, utilizando o transporte público.
              </p>
            </a>
          </li>
          <li>
            <a href="">
              <h3>Landing Page - GoTravel (UI)</h3>
              <p>
                Projeto voltado para criação de roteiros de viagens, incluindo
                pontos de interesse, pontos gastronômicos e atrações.
              </p>
            </a>
          </li>
          <li>
            <a href="">
              <h3>My Portfolio (GitHub)</h3>
              <p>
                Projetos em React Native desenvolvidos com o objetivo de
                melhorar a qualidade dos meus entregáveis
              </p>
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
