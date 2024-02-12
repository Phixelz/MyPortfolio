import styles from "./styles.module.scss";

import { Theme } from "../Theme";

export function Header() {
  return (
    <header className={styles.container}>
      <hgroup>
        <div className={styles.wrapper}>
          <h1>Phillipi Alves</h1>
          <div>
            <Theme />
          </div>
        </div>
      </hgroup>
    </header>
  );
}
