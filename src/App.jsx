import './App.css'
import { Header } from './components/Header'
import { Footer } from './components/Footer'


function App() {

  return (
    <>
      <Header />
        <section className='container'>
          <div className='apresentacao'>
            <p>
              Olá, sou <br />
              <span>Gildásio Aguiar</span> <br/>
              Web Developer <br />
              <button className='btn btn-red'>
                Saiba mais sobre mim 
              </button>
            </p>
          </div>
          <figure>
            <img className='img-home' src="/developer-red.svg" alt="Imagem de Home" />
          </figure>
        </section>
      <Footer />
    </>
  )
}

export default App
