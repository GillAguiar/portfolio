import styles from "./Sobre.module.css";
import avatar from "./images/avatar.png";
import { SiJavascript, SiReact, SiNodedotjs, SiHtml5, SiCss3 } from "react-icons/si";

function Sobre() {
  return (
    <section className={styles.sobre}>
      <div className={styles.bio}>
        <img src={avatar} alt="" className={styles.avatar} />
        <div className={styles.textos}>
          <h2>Sobre</h2>
          <p>Sou <span>Gildásio Aguiar</span> <br />
          <strong>Dev Full Stack</strong></p>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /></p>

          <p>Fugit perferendis necessitatibus enim distinctio, impedit <br />
           perspiciatis quod culpa voluptatum hic, nobis assumenda est placeat.</p>
        </div> 
      </div>

      <div className={styles.techs}>
        <h3>Techs</h3>
        <div className={styles.icone}>
          <SiHtml5 />
          <SiCss3 />
          <SiJavascript />
          <SiReact />
          <SiNodedotjs />
        </div>
      </div>
    </section>
  );
}

export default Sobre;
