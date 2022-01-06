import { Title } from '../Title'

import styles from './styles.module.scss'

export function AboutUs() {
  return (
    <section className={styles.wrapper} id="about">
      <Title
        title="Sobre mim"
        subtitle="01. Experiência"
        description="User Experience Designer com 5 anos de experiência, criando projetos para startups e empresas de médio e grande porte."
      />

      <ul>
        <li>
          <h3>UX Designer Pleno - SPC Brasil</h3>
          <p>Abr 2021 - Atual</p>
          <p>Foco em validar e criar processos de ponta a ponta para um dos principais produtos da empresa (Cadastro Positivo).</p> 
        </li>
        <li>
          <h3>UX/UI Designer - Mundo Wap</h3>
          <p>Abr 2019 - Dez 2020</p>
          <p>Inicialmente, tínhamos como objetivo criar uma feature (CX) para atender uma solicitação de um cliente especifico da empresa.</p> 
        </li>
        <li>
          <h3>UX/UI Designer - G-Digital</h3>
          <p>Abr 2019 - Jun 2019</p>
          <p>Reestruturação de plataforma seguindo os conceitos de UX e solicitações do stalkholder de acordo com o discovery realizado.</p>
        </li>
        <li>
          <h3>UI Designer - Amigoo</h3>
          <p>Aug 2019 - Aug 2019</p>
          <p>Criar formulário com foco em conversão, utilizando conceitos de UX/UI atuais com o objetivo de melhorar a experiência do público alvo da empresa.</p>
        </li>
        <li>
          <h3>Full Stack Designer - Midhaz</h3>
          <p>May 2018 - Dez 2018</p>
          <p>Criação de UI para landing pages com foco em conversão, utilizando builders e posteriomente, bootstrap 4. </p>
        </li>
      </ul>
    </section>
  )
}