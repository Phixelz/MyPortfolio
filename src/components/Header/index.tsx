import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.container}>
      <hgroup>
      <div className={styles.wrapper}>
        <h1>PhillipiAlves.</h1>
        <h1>PT-BR</h1>
      </div>
      </hgroup>
    </header>
  );
}
