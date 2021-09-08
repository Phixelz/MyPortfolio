import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>

      {/*HEADER*/}

      <header className={styles.header}>
        <p>Phillipi Alves.</p>
      </header>

      {/*HERO*/}

      <main className={styles.main}>
        <h1 className={styles.title}>
          Eu sou Phillipi,<b className={styles.text_job}>User Experience Analyst Senior</b>
        </h1>

        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. A adipiscing ac porta egestas. {' '}
        </p>

        {/*BUTTON RESUME*/}

        <button className={styles.button}>
          Download Resume</button>

        {/*GRID COMPANYS*/}

        <div className={styles.grid_companys}>
          <h1 className={styles.title_pages}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>

          <p className={styles.description_pages}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. A adipiscing ac porta egestas. {' '}
          </p>

          <a href="" className={styles.company1}>
            <h2>Company Name</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A adipiscing ac porta egestas. Turpis viverra egestas arcu pulv inar bibendum.</p>
          </a>

          <a href="" className={styles.company2}>
            <h2>Company Name </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A adipiscing ac porta egestas. Turpis viverra egestas arcu pulv inar bibendum.</p>
          </a>

          <a
            href=""
            className={styles.company3}
          >
            <h2>Company Name</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A adipiscing ac porta egestas. Turpis viverra egestas arcu pulv inar bibendum.</p>
          </a>
        </div>

        {/*GRID PROJECTS*/}

        <div className={styles.grid_projects}>
          <h1 className={styles.title_pages}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>

          <p className={styles.description_pages}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. A adipiscing ac porta egestas. {' '}
          </p>

          <a href="" className={styles.card1}>
            <h2>01. Learn App &rarr;</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A adipiscing ac porta egestas. Turpis viverra egestas arcu pulv inar bibendum.</p>
          </a>

          <a href="" className={styles.card2}>
            <h2>02. Camper App &rarr;</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A adipiscing ac porta egestas. Turpis viverra egestas arcu pulv inar bibendum.</p>
          </a>

          <a
            href=""
            className={styles.card3}
          >
            <h2>03. Easy Bank &rarr;</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A adipiscing ac porta egestas. Turpis viverra egestas arcu pulv inar bibendum.</p>
          </a>

          <a
            href=""
            className={styles.card4}
          >
            <h2>04. Big Bus &rarr;</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. A adipiscing ac porta egestas. Turpis viverra egestas arcu pulv inar bibendum.
            </p>
          </a>

          <a
            href=""
            className={styles.card5}
          >
            <h2>05. Go Travel &rarr;</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. A adipiscing ac porta egestas. Turpis viverra egestas arcu pulv inar bibendum.
            </p>
          </a>
        </div>
      </main>

      {/*FOOTER*/}

      <footer className={styles.footer}>
        <h3>Phillipi Alves.</h3>
        <p className={styles.footer_description}>
          All rights reserved
        </p>
      </footer>
    </div>
  )
}
