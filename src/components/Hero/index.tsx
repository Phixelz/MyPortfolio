import Link from 'next/link'
import { FiInstagram, FiGithub, FiLinkedin } from 'react-icons/fi'

import styles from './styles.module.scss'

export function Hero() {
  return (
    <section className={styles.wrapper}>
      <h2><span>Eu sou Phillipi,</span> User Experience Analyst Pleno.</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A adipiscing ac porta egestas.</p>
      <button type="button">Download Resume</button>

      <ul className="social">
        <li>
          <Link href="#">
            <a>
              <FiInstagram />
            </a>
          </Link>
        </li>

        <li>
          <Link href="#">
            <a>
              <FiGithub />
            </a>
          </Link>
        </li>

        <li>
          <Link href="#">
            <a>
              <FiLinkedin />
            </a>
          </Link>
        </li>
      </ul>

      <ul className="email">
        <li>phillipi.alves@gmail.com</li>
      </ul>
    </section>
    
  )
}