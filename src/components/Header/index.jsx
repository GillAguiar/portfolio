import { useState } from 'react'
import styles from './Header.module.css'

export function Header() {

    const [ showMenu, setShowMenu ] = useState(false)
    const toogleMenu = () => {
        setShowMenu(!showMenu)
    }

    return (
        <header className={styles.header}>
            <span>GilAguiar.dev</span>
            <nav 
                className={`${styles.menuSandwich} ${ showMenu ? styles.show : '' }`}
                onClick={toogleMenu}
            >
                <a href="#">Home</a>
                <a href="#">Sobre</a>
                <a href="#">Projetos</a>
                <a href="#">Contatos</a>
            </nav>
            <div className={styles.menuButton}
                 onClick={toogleMenu}
            >
                <span className={styles.linha}> </span>
                <span className={styles.linha}> </span>
                <span className={styles.linha}> </span>
            </div>
        </header>
    )
}