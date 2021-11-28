import styles from './styles.module.scss'

export function Hero() {
  return (
    <section className={styles.wrapper}>
      <h2><span>Eu sou Phillipi,</span> User Experience Analyst Pleno | SPC Brasil.</h2>
      <p>Olá, eu sou Phillipi. Apaixonado por experiência do usuário, minimalismo, astronomia, camping, café e desafios, muitos desafios.</p>
     
        <button type="button">Download Resume</button>
    </section>

  )
}