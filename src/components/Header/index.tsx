import Link from 'next/link'
import { useCallback, useState } from 'react'
import { FiMenu, FiX, FiInstagram, FiGithub, FiLinkedin } from 'react-icons/fi'

import styles from './styles.module.scss'

export function Header() {
  const [hidden, setHidden] = useState(false);

  const handleToggleMenu = useCallback(() => {
    setHidden((state) => !state);
  }, [])

  return (
    <header>
      <div className={styles.wrapper}>
        <h1>Phillipi Alves.</h1>

        <button type="button" onClick={handleToggleMenu}>
          {hidden ? <FiMenu /> : <FiX />}
        </button>

        <nav className={styles.navigation} aria-hidden={hidden.toString()}>
          <ul className="nav" onClick={handleToggleMenu}>
            <li>
              <Link href="/#about">
                <a>Sobre</a>
              </Link>
            </li>

            <li>
              <Link href="/#projects">
                <a>Projetos</a>
              </Link>
            </li>

            <li>
              <Link href="/#contact">
                <a>Contato</a>
              </Link>
            </li>
          </ul>

          <button type="button" className="download">Download Resume</button>

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
        </nav>
      </div>
    </header>
  )
}