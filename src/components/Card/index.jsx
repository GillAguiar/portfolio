import styles from "./Card.module.css";

function Card() {
  return (
    <section className={styles.card}>
      <h3>Título</h3>
      <p>Descrição do projeto <br />
        pipipipopopo
      </p>    
      <div className={styles.card_footer}>
        <div className={styles.card_icons}>
            html
            css js node
        </div>
        <button className={styles.card_button}>
        Botão
      </button>
      </div>
    </section>
  );
}

export default Card;
