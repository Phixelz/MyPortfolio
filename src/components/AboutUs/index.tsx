import { Title } from "../Title";

import styles from "./styles.module.scss";

export function AboutUs() {
  return (
    <div className={styles.container}>
      <section className={styles.wrapper} id="about">
        <Title
          title="Sobre mim"
          subtitle="01. Experiência"
          description="User Experience Designer com 5 anos de experiência, criando projetos para startups e empresas de médio e grande porte."
        />

        <ul>
          <li>
            <h3>User Experience Analyst Senior - SPC Brasil</h3>
            <p>Abr 2021 - Atual</p>
            <p>
              Foco em validar e criar processos de ponta a ponta para um dos
              principais produtos da empresa (Cadastro Positivo).
            </p>
          </li>
          <li>
            <h3>
              Product Designer & UX/UI - Mundo Wap Internet Solutions (Tempo
              Integral)
            </h3>
            <p>Abr 2019 - Dez 2020</p>
            <p>
              Inicialmente, tínhamos como objetivo criar uma feature (CX) para
              atender uma solicitação de um cliente especifico da empresa.
            </p>
          </li>
          <li>
            <h3>User Experience Designer - G Digital (Freela)</h3>
            <p>Abr 2019 - Jun 2019</p>
            <p>
              Reestruturação de plataforma seguindo os conceitos de UX e
              solicitações do stalkholder de acordo com o discovery realizado.
            </p>
          </li>
        </ul>
      </section>
    </div>
  );
}
