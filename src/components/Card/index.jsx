import styles from "./Card.module.css";
import { FaArrowCircleRight } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
function Card({ name, description, languages_url, html_url, language}) {
  return (
    <section className={styles.card}>
      <h3>{name}</h3>
      <p>{description}</p>
      <div className={styles.card_footer}>
        <div className={styles.card_icons}>
          <a href={languages_url}>{language}</a> {/* Adicione um link para as linguagens do repositório */}
        </div>
        <a href={html_url} target='_blank' rel='noopener norefferer' className={styles.card_button}> {/* Adicione um link para o repositório */}
          <FaArrowCircleRight />
        </a>
      </div>
    </section>
  );
}

export default Card;
