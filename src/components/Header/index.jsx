import styles from './styles.module.css'

export function Header() {
    return (
        <header className={styles.header}>
            <span>GilAguiar.dev</span>
            <nav>
                <a href="#">Home</a>
                <a href="#">Sobre</a>
                <a href="#">Projetos</a>
                <a href="#">Contatos</a>
            </nav>
        </header>
    )
}