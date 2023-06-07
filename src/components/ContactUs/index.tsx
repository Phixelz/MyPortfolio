import { Title } from "../Title";

import styles from "./styles.module.scss";

export function ContactUs() {
  return (
    <div className={styles.container}>
      <section className={styles.wrapper} id="contact">
        <Title
          title="Contato"
          subtitle="03. Contate-me"
          description="Vamos conversar?"
        />

        <a href="mailto:phillipi.alves@gmail.com">
          <button type="button">Contate-me</button>
        </a>

        {/*
      <form>
        <input type="text" name="name" placeholder="Nome Completo" />
        <input type="email" name="email" placeholder="E-mail" />
        <textarea name="menssage" rows={3} placeholder="Mensagem"></textarea>
        <button type="submit">Enviar</button>
      </form>
 */}
      </section>
    </div>
  );
}
