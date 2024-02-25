import { Link } from 'react-router-dom'
import styles from './Home.module.css'

function Home() {
    return (
        <>
          <section className={styles.home}>
              <div className={styles.apresentacao}>
                <p>
                  Olá, sou <br />
                  <span>Gildásio Aguiar</span> <br/>
                  Web Developer <br />
                  <Link to='/sobre' className={`${styles.btn} ${styles.btn_red}`}>
                    Saiba mais sobre mim 
                  </Link>
                </p>
              </div>
              <figure>
                <img className={styles.img_home} src="/developer-red.svg" alt="Imagem de Home" />
              </figure>
            </section>
      </> 
    )
}

export default Home
