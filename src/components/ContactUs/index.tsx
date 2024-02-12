import { Title } from "../Title";

import styles from "./styles.module.scss";

export function ContactUs() {
  return (
    <div className={styles.container}>
      <section className={styles.wrapper} id="contact">
        <div className={styles.content}>
          <Title
            title="Contato"
            subtitle="03. Contate-me"
            description="Entre em contato utilizando o botão abaixo"
          />

          <a href="mailto:phillipi.alves@gmail.com">
            <button type="button">Contate-me</button>
          </a>
        </div>

          <ul className={styles.social}>
              <li>
              <a href="https://uxcontrol.medium.com/design-brutalista-brutalism-321f7d261827" target="blank">
                <p>MEDIUM</p>
                </a>
              </li>
            
           
              <li>
              <a
              href="https://www.linkedin.com/in/phillipi-alves-767985160/"
              target="blank"
            >
                <p>Linkedin</p>
                </a>
              </li>
           
           
              <li>
              <a href="https://github.com/Phixelz" target="blank">
                <p>Github</p>
                </a>
              </li>
            
          </ul>
      </section>
    </div>
  );
}
