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
      </div>
    </header>
  )
}