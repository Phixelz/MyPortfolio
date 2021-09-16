import Head from 'next/head'
import styles from '../styles/styles.module.css'

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title> Phillipi Alves. </title>{' '}
      </Head>
      <div className={styles.container}>

        {/*HEADER*/}

        <header>
          <p className={styles.header_name}> Phillipi Alves. </p>{' '}
        </header>

        {/*HERO*/}

        <main className={styles.hero}>
          <h1 className={styles.title}>
            Eu sou Phillipi,{' '}
            <code className={styles.text_job}>
              {' '}
              User Experience Analyst Pleno.{' '}
            </code>{' '}
          </h1>
          <p className={styles.description_hero}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Mauris
            euismod sem ut mi convallis.{' '}
          </p>

          {/*BUTTON DOWNLOAD RESUME*/}

          <button className={styles.resume_button}>
            Download Resume{' '}
          </button>{' '}
        </main>

        {/*GRID COMPANYS*/}

        <div className={styles.grid_companys}>
          <p className={styles.page_name}> Sobre mim </p>{' '}
          <h1 className={styles.title_pages}> 01. Experiência </h1>
          <p className={styles.description_pages}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.A adipiscing
            ac porta egestas.{' '}
          </p>

          <ul className={styles.timeline}>
            <li>
              <h2 className={styles.company_name}>
                {' '}
                UX Designer Senior{' '}
              </h2>{' '}
            </li>{' '}
            <p className={styles.company_description}>
              {' '}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.A
              adipiscing ac porta egestas.Turpis viverra egestas arcu pulv
              inar bibendum.{' '}
            </p>{' '}
          </ul>{' '}

          <ul className={styles.timeline}>
            <li>
              <h2 className={styles.company_name}>
                {' '}
                UX Designer Pleno{' '}
              </h2>{' '}
            </li>{' '}
            <p className={styles.company_description}>
              {' '}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.A
              adipiscing ac porta egestas.Turpis viverra egestas arcu pulv
              inar bibendum.{' '}
            </p>{' '}
          </ul>{' '}

          <ul className={styles.timeline}>
            <li>
              <h2 className={styles.company_name}> UI Designer Senior</h2>{' '}
            </li>
            <p className={styles.company_description}>
              {' '}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.A
              adipiscing ac porta egestas.Turpis viverra egestas arcu pulv
              inar bibendum.{' '}
            </p>{' '}
          </ul>{' '}

          <ul className={styles.timeline}>
            <li>
              <h2 className={styles.company_name}>
                {' '}
                UI Designer{' '}
              </h2>{' '}
            </li>{' '}
            <p className={styles.company_description}>
              {' '}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.A
              adipiscing ac porta egestas.Turpis viverra egestas arcu pulv
              inar bibendum.{' '}
            </p>{' '}
          </ul>{' '}
        </div>

        {/*GRID PROJECTS*/}

        <div className={styles.projects_content}>

          <code className={styles.page_project_name}> Projetos </code>{' '}
          <h1 className={styles.title_project}> 02. Meus Projetos </h1>
          <p className={styles.description_project}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.A adipiscing
            ac porta egestas.{' '}
          </p>
        </div>

        <div>
          <section className={styles.grid_cards}>
            <div className={styles.card1}>
              <a href="">
                <h2 className={styles.project_name}> Learn App </h2>{' '}
                <p className={styles.project_description}>
                  {' '}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.A
                  adipiscing ac porta egestas.Turpis viverra egestas arcu pulv inar
                  bibendum.{' '}
                </p>{' '}
              </a>
            </div>

            <div className={styles.card2}>
              <a href="">
                <h2 className={styles.project_name}> Camper App </h2>{' '}
                <p className={styles.project_description}>
                  {' '}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.A
                  adipiscing ac porta egestas.Turpis viverra egestas arcu pulv inar
                  bibendum.{' '}
                </p>{' '}
              </a>
            </div>

            <div className={styles.card3}>
              <a href="">
                <h2 className={styles.project_name}> Easy Bank </h2>{' '}
                <p className={styles.project_description}>
                  {' '}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.A
                  adipiscing ac porta egestas.Turpis viverra egestas arcu pulv inar
                  bibendum.{' '}
                </p>{' '}
              </a>
            </div>

            <div className={styles.card4}>
              <a href="">
                <h2 className={styles.project_name}> Big Bus </h2>{' '}
                <p className={styles.project_description}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.A
                  adipiscing ac porta egestas.Turpis viverra egestas arcu pulv inar
                  bibendum.{' '}
                </p>{' '}
              </a>
            </div>

            <div className={styles.card5}>
              <a href="">
                <h2 className={styles.project_name}> Go Travel </h2>{' '}
                <p className={styles.project_description}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.A
                  adipiscing ac porta egestas.Turpis viverra egestas arcu pulv inar
                  bibendum.{' '}
                </p>{' '}
              </a>{' '}
            </div>

            <div className={styles.card6}>
              <a href="">
                <h2 className={styles.project_name}> Mirror Investments </h2>{' '}
                <p className={styles.project_description}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.A
                  adipiscing ac porta egestas.Turpis viverra egestas arcu pulv inar
                  bibendum.{' '}
                </p>{' '}
              </a>{' '}
            </div>
          </section>
        </div>


        {/* CONTACT*/}

        <div className={styles.grid_contact}>
          <code className={styles.page_name}> Contato </code>{' '}
          <h1 className={styles.title_pages}> 03. Contate - me </h1>
          <p className={styles.description_pages}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.A adipiscing
            ac porta egestas.{' '}
          </p>

          {/*BUTTON DOWNLOAD RESUME*/}

          <button className={styles.contact_button}>Contate - me </button>{' '}
        </div>

        {/*FOOTER*/}

        <footer className={styles.footer}>
          <h3 className={styles.footer_name}> Phillipi Alves. </h3>{' '}
          <p className={styles.footer_description}>Build version 0.1.1</p>{' '}
        </footer>{' '}
      </div>{' '}
    </>
  )
}
export default Home