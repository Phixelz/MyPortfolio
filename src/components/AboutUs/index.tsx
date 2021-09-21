import { Title } from '../Title'

import styles from './styles.module.scss'

export function AboutUs() {
  return (
    <section className={styles.wrapper}>
      <Title
        title="Sobre mim"
        subtitle="01. Experiência"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. A adipiscing ac porta egestas. "
      />

      <ul>
        <li>
          <h3>UX Designer Senior</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A adipiscing ac porta egestas. Turpis viverra egestas arcu pulv inar bibendum.</p>
        </li>
        <li>
          <h3>UX Designer Pleno</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A adipiscing ac porta egestas. Turpis viverra egestas arcu pulv inar bibendum.</p>
        </li>
        <li>
          <h3>UI Designer Senior</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A adipiscing ac porta egestas. Turpis viverra egestas arcu pulv inar bibendum.</p>
        </li>
        <li>
          <h3>UI Designer</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A adipiscing ac porta egestas. Turpis viverra egestas arcu pulv inar bibendum.</p>
        </li>
      </ul>
    </section>
  )
}