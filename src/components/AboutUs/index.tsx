import { Title } from '../Title'

import styles from './styles.module.scss'

export function AboutUs() {
  return (
    <section className={styles.wrapper} id="about">
      <Title
        title="Sobre mim"
        subtitle="01. Experiência"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. A adipiscing ac porta egestas. Turpis viverra egestas arcu pulv inar bibendum."
      />

      <ul>
        <li>
          <h3>UX Designer Pleno - SPC Brasil</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A adipiscing ac porta egestas. Turpis viverra egestas arcu pulv inar bibendum.</p>
        </li>
        <li>
          <h3>UX/UI Designer - Mundo Wap</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A adipiscing ac porta egestas. Turpis viverra egestas arcu pulv inar bibendum.</p>
        </li>
        <li>
          <h3>UX/UI Designer - G-Digital</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A adipiscing ac porta egestas. Turpis viverra egestas arcu pulv inar bibendum.</p>
        </li>
        <li>
          <h3>UI Designer - Amigoo</h3>
          <p>Contratação freelancer para criação de interface de formulário com foco em conversão.</p>
        </li>
        <li>
          <h3>Full Stack Designer - Midhaz</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A adipiscing ac porta egestas. Turpis viverra egestas arcu pulv inar bibendum.</p>
        </li>
      </ul>
    </section>
  )
}