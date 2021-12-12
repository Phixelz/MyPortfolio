import { useCallback } from 'react'

import { FiArrowUp, FiHeart } from 'react-icons/fi'

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
        <p className={styles.iconheart}>Desenvolvido com <FiHeart/> por mim
        </p>
      </hgroup>
      <button type="button" onClick={handleScrollToTop}>
        <FiArrowUp />
      </button>
    </footer>
  )
}