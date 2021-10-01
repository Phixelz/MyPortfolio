import { useCallback } from 'react'

import styles from './styles.module.scss'

export function Header() {
  const handleToggleMenu = useCallback(() => {
    console.log('toggle menu')
  }, [])

  return (
    <header>
      <div className={styles.wrapper}>
        <h1>Phillipi Alves.</h1>
      </div>
    </header>
  )
}