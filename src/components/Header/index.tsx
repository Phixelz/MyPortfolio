import { useCallback } from 'react'

import { FiMenu } from 'react-icons/fi'

import styles from './styles.module.scss'

export function Header() {
  const handleToggleMenu = useCallback(() => {
    console.log('toggle menu')
  }, [])

  return (
    <header>
      <div className={styles.wrapper}>
        <h1>Phillipi Alves.</h1>

        <button type="button" onClick={handleToggleMenu}>
          <FiMenu />
        </button>
      </div>
    </header>
  )
}