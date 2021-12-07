import styles from './styles.module.scss'

export function Hero() {
  return (
    <section className={styles.wrapper}>
      <h2><a href='https://github.com/Phixelz/myportfolio' target='blank'>
        <span>Eu sou Phillipi,</span></a>User Experience Analyst Pleno | SPC Brasil.</h2>
      <p></p>
      <button type="button">Download Resume</button>
    </section>

  )
}