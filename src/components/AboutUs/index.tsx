import { Title } from "../Title";

import styles from "./styles.module.scss";

export function AboutUs() {
  return (
    <div className={styles.container}>
      <section className={styles.wrapper} id="about">
        <Title
          title="Sobre mim"
          subtitle="01. Experiência"
          description="User Experience Analyst Senior. Atualmente projetando experiências para o SPC BRASIL"
        />
        <ul>
          <li>
            <p>Abr 2021 - Atual</p>
            <h3>User Experience Analyst Senior - SPC Brasil</h3>
            <p>
              Foco em validar e criar processos de ponta a ponta para um dos
              principais produtos da empresa (Cadastro Positivo).
            </p>
          </li>

          <li>
            <p>Abr 2019 - Dez 2020</p>
            <h3>
              Product Designer & UX/UI - Mundo Wap Internet Solutions (Tempo
              Integral)
            </h3>

            <p>
              Inicialmente, tínhamos como objetivo criar uma feature (CX) para
              atender uma solicitação de um cliente especifico da empresa.
            </p>
          </li>
          
          <li>
            <p>Abr 2019 - Jun 2019</p>
            <h3>User Experience Designer - G Digital</h3>
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
