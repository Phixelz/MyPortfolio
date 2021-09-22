import { FiArrowDown, FiArrowRight } from 'react-icons/fi'
import { Title } from '../Title'

import styles from './styles.module.scss'

export function Projects() {
  return (
    <section className={styles.wrapper}>
      <Title
        title="Projetos"
        subtitle="02. Meus Projetos"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. A adipiscing ac porta egestas. "
      />

      <ul>
        <li>
          <h3>Learn App</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A adipiscing ac porta egestas. Turpis viverra egestas arcu.</p>
        </li>
        
        <li>
          <h3>Camper App</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A adipiscing ac porta egestas. Turpis viverra egestas arcu.</p>
        </li>
        <li>
          <h3>Easy Bank</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A adipiscing ac porta egestas. Turpis viverra egestas arcu.</p>
        </li>
        <li>
          <h3>Big Bus</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A adipiscing ac porta egestas. Turpis viverra egestas arcu.</p>
        </li>
        <li>
          <h3>Go Travel</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A adipiscing ac porta egestas. Turpis viverra egestas arcu.</p>
        </li>
        <li>
          <h3>Mirror Investments</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A adipiscing ac porta egestas. Turpis viverra egestas arcu.</p>
        </li>
      </ul>
    </section>
  )
}