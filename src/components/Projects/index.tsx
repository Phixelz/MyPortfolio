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
              <h3>Learn App (App)</h3>
              <p>
                Projeto mobile com objetivo de fornecer cursos com preços
                acessíveis, utilizando gamificação para obtenção de novos cursos.
              </p>
            </a>
          </li>

          <li>
            <a href="">
              <h3>Acampe App (WebApp)</h3>
              <p>
                Aplicativo para campistas que utiliza geolocalização para
                encontrar áreas de campings com rotas, preços e comodidades do
                local.
              </p>
            </a>
          </li>

          <li>
            <a href="">
              <h3>Mirror Investments (Plataforma / App )</h3>
              <p>
                Projeto que tem como objetivo, criar carteiras de ativos de renda fixa e variável (Multibroker). 
              </p>
            </a>
          </li>

          <li>
            <a href="">
              <h3>Big Bus (App)</h3>
              <p>
                Case de estudo com objetivo de melhorar a experiência do usuário
                na busca pelo melhor trajeto, utilizando o transporte público.
              </p>
            </a>
          </li>

          <li>
            <a href="https://cadastropositivo.spcbrasil.org.br/cadpos-consumidor-login/" target="blank">
              <h3>Cadastro Positivo (Portal do Consumidor)</h3>
              <p>
                Reestruturação e implementação de nova feature (Contestação) dentro de um dos produtos do SPC Brasil.
              </p>
            </a>
          </li>
          
          <li>
            <a href="">
              <h3>Plataforma de Negociação (SPC + Sofi)</h3>
              <p>
                Projeto desenvolvido dentro de uma squad multidisciplinar com o objetivo de gerar ofertas e acordo, facilitando pagamentos de dívidas em atraso. 
              </p>
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
