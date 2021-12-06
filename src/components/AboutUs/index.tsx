import { Title } from '../Title'

import styles from './styles.module.scss'

export function AboutUs() {
  return (
    <section className={styles.wrapper} id="about">
      <Title
        title="Sobre mim"
        subtitle="01. Experiência"
        description="UX Designer autodidata com 5 anos de experiência, criando projetos para startups e empresas de médio e grande porte."
      />

      <ul>
        <li>
          <h3>UX Designer Pleno - SPC Brasil</h3>
          <p>Abr 2021 - Atual</p>
        </li>
        <li>
          <h3>UX/UI Designer - Mundo Wap</h3>
          <p>Abr 2019 - Dez 2020 -  </p>
        </li>
        <li>
          <h3>UX/UI Designer - G-Digital</h3>
          <p>Abr 2019 - Jun 2019</p>
        </li>
        <li>
          <h3>UI Designer - Amigoo</h3>
          <p>Aug 2019 - Aug 2019</p>
        </li>
        <li>
          <h3>Full Stack Designer - Midhaz</h3>
          <p>May 2018 - Dez 2018</p>
        </li>
      </ul>
    </section>
  )
}