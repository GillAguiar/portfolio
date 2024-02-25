import styles from './Contatos.module.css'
import { BsInstagram, BsWhatsapp, BsGithub, BsLinkedin } from "react-icons/bs";

function Contatos() {
    return (
        <>
                    <>
                        <section className={styles.textos}>
                            <h2 className={styles.texto_grande}>Contatos</h2>
                            <h3 className={styles.texto_medioo}>Entre em contato</h3>
                            <p className={styles.texto_pequeno}>Para que possamos conversar mais sobre</p>
                           
                            <div className={styles.icones}>
                            <a href="https://www.instagram.com/gilaguiarimoveis/" target='_blank' rel='noopener noreferrer'>
                                <BsInstagram className={styles.icone} />
                            </a>
                            <a href="https://api.whatsapp.com/send?phone=5586995925666" target='_blank' rel='noopener noreferrer'>
                                <BsWhatsapp className={styles.icone} />
                            </a>
                            <a href="https://github.com/GillAguiar" target='_blank' rel='noopener noreferrer'>
                                <BsGithub className={styles.icone} />
                            </a>
                            <a href="https://www.linkedin.com/in/gildasioaguiar/" target='_blank' rel='noopener noreferrer'>
                                <BsLinkedin className={styles.icone} />
                            </a>
                        </div>

                        </section>
                    </>
        </>
    )
}

export default Contatos
