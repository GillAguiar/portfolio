import { useState, useEffect } from "react";
import Card from "../../components/Card";
import styles from "./Projetos.module.css";

function Projetos() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    const searchRepositories = async () => {
      const response = await fetch(
        "https://api.github.com/users/gillaguiar/repos"
      );
      const data = await response.json();
      setRepositories(data);
      console.log(data);
    };
    searchRepositories();
  }, []);

  return (
    <section className={styles.projetos}>
      <h2>Projetos</h2>
      <section className={styles.card}>
        {repositories.map((repo) => (
          <Card
            key={repo.id}
            name={repo.name}
            description={repo.description}
            html_url={repo.html_url}
            language={repo.language}
          />
        ))}
      </section>
    </section>
  );
}

export default Projetos;
