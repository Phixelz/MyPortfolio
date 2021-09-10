import styles from '../styles/styles.module.css'

export default function Main() {
  return (
    <div className={styles.container}>

      {/*HEADER*/}

      <header className={styles.header}>
        <p>Phillipi Alves.</p>
      </header>

      {/*HERO*/}

      <main className={styles.hero}>
        <h1 className={styles.title}>
          Eu sou Phillipi,<span className={styles.text_job}>User Experience Analyst Pleno.</span>
        </h1>

        <p className={styles.description_hero}>
          Lorem ipsum dolor sit amet, consectetur adipiscing. A adipiscing ac porta egestas. {' '}
        </p>

        {/*BUTTON RESUME*/}

        <button className={styles.button}>
          Download Resume</button>
      </main>

      {/*GRID COMPANYS*/}

      <div className={styles.grid_companys}>
        <h1 className={styles.title_pages}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>

        <p className={styles.description_pages}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. A adipiscing ac porta egestas. {' '}
        </p>

        <a href="">
          <ul className={styles.timeline}>
            <li>
              <h2>UX Designer Pleno - Google</h2>
            </li>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A adipiscing ac porta egestas. Turpis viverra egestas arcu pulv inar bibendum.</p>
          </ul>
        </a>

        <a href="">
          <ul className={styles.timeline}>
            <li>
              <h2>UX Designer - Facebook</h2>
            </li>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A adipiscing ac porta egestas. Turpis viverra egestas arcu pulv inar bibendum.</p>
          </ul>
        </a>

        <a
          href="">
          <ul className={styles.timeline}>
            <li>
              <h2>UI Designer - IBM</h2>
            </li>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A adipiscing ac porta egestas. Turpis viverra egestas arcu pulv inar bibendum.</p>
          </ul>
        </a>
      </div>

      {/*GRID PROJECTS*/}

      <div className={styles.grid_projects}>
        <h1 className={styles.title_pages}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>

        <p className={styles.description_pages}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. A adipiscing ac porta egestas. {' '}
        </p>

        <a href="" className={styles.card1}>
          <h2>01. Learn App</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A adipiscing ac porta egestas. Turpis viverra egestas arcu pulv inar bibendum.</p>
        </a>

        <a href="" className={styles.card2}>
          <h2>02. Camper App</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A adipiscing ac porta egestas. Turpis viverra egestas arcu pulv inar bibendum.</p>
        </a>

        <a
          href=""
          className={styles.card3}
        >
          <h2>03. Easy Bank</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A adipiscing ac porta egestas. Turpis viverra egestas arcu pulv inar bibendum.</p>
        </a>

        <a
          href=""
          className={styles.card4}
        >
          <h2>04. Big Bus</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. A adipiscing ac porta egestas. Turpis viverra egestas arcu pulv inar bibendum.
          </p>
        </a>

        <a
          href=""
          className={styles.card5}
        >
          <h2>05. Go Travel</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. A adipiscing ac porta egestas. Turpis viverra egestas arcu pulv inar bibendum.
          </p>
        </a>
      </div>

      {/*FOOTER*/}

       <footer className={styles.footer}>
        <h3 className={styles.footer_description}> Phillipi Alves.</h3>
        <p>
          All rights reserved
        </p>
      </footer> 
    </div>
  )
}