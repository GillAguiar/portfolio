import styles from "./Card.module.css";

function Card() {
  return (
    <section className={styles.card}>
      <h3>Título</h3>
      <p>Descrição do projeto</p>
      <div className={styles.card_footer}>
        <div className={styles.card_icons}>
            html
        </div>
      </div>
      <button className={styles.card_button}>
        Botão
      </button>
    </section>
  );
}

export default Card;
