import { useCallback } from 'react'

import { FiArrowUp } from 'react-icons/fi'

import styles from './styles.module.scss'

export function Footer() {
  const handleScrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [])

  return (
    <footer className={styles.wrapper}>
      <hgroup>
        <h2>Phillipi Alves.</h2>
        <p>All rights reserved</p>
      </hgroup>

      <button type="button" onClick={handleScrollToTop}>
        <FiArrowUp />
      </button>
    </footer>
  )
}