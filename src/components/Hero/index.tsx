import styles from "./styles.module.scss";

export function Hero() {
  return (
    <div className={styles.container}>
      <section className={styles.wrapper}>
        <h2>
          <a
            href="https://drive.google.com/file/d/1my3vHRM4RqAzpF41jyMQ4TUncGg_KqGm/view"
            target="blank"
          >
            <span>User Experience Analyst Senior </span>
          </a>
          at SPC BRASIL
        </h2>
        <p>
          Analista de experiência do usuário, apaixonado por café, leitor ávido
          de literatura russa e que está sempre buscando novos desafios.
        </p>

        <button
          type="button"
          onClick={() => window.open("resume_phillipi.pdf")}
        >
          Download Resume
        </button>

        <footer>
          <div>
            <img className={styles.avatar} src="selfie.png" alt="selfie" />
          </div>

          <hgroup className={styles.avatar_group}>
            <h1>Phillipi Alves</h1>
            <p className={styles.subtitle}>User Experience Analyst Senior</p>
          </hgroup>
        </footer>
      </section>
    </div>
  );
}
