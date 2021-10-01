import styles from './styles.module.scss'

export function Hero() {
  return (
    <section className={styles.wrapper}>
      <h2><span>Eu sou Phillipi,</span> User Experience Analyst Pleno.</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A adipiscing ac porta egestas.</p>
        <button type="button">Download Resume</button>
    </section>
    
  )
}