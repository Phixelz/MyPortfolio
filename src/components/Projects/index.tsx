import { Title } from '../Title'

import styles from './styles.module.scss'

export function Projects() {
  return (
    <section className={styles.wrapper} id="projects">
      <Title
        title="Projetos"
        subtitle="02. Meus Projetos"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. A adipiscing ac porta egestas. "
      />

      <ul>
        <li>
        <a href="">
          <h3>Learn App</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A adipiscing ac porta egestas. Turpis viverra egestas arcu.</p>
          </a>
        </li>
        
        <li>
        <a href="">
          <h3>Camper App</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A adipiscing ac porta egestas. Turpis viverra egestas arcu.</p>
          </a>
        </li>
        <li>
        <a href="">
          <h3>Mirror Analytic</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A adipiscing ac porta egestas. Turpis viverra egestas arcu.</p>
          </a>
        </li>
        <li>
        <a href="">
          <h3>Big Bus</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A adipiscing ac porta egestas. Turpis viverra egestas arcu.</p>
          </a>
        </li>
        <li>
        <a href="">
          <h3>Go Travel</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A adipiscing ac porta egestas. Turpis viverra egestas arcu.</p>
          </a>
        </li>
        <li>
        <a href="">
          <h3>My Portfolio (Git)</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A adipiscing ac porta egestas. Turpis viverra egestas arcu.</p>
          </a>
        </li>
      </ul>
    </section>
  )
}