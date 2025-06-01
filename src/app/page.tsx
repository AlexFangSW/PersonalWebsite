import styles from "./page.module.css";
import HomePageCards from "@/components/HomePageCards";
import { silkscreen, sourceCodePro } from "@/utils/fonts";

export default function Home() {
  return (
    <div className={`center-container ${styles.container}`}>
      <header className={`${styles.header}`}>
        <h1 className={`${silkscreen.className}`}>
          Hi, I'm Hao-Yun Fang. Welcome to my personal website !
        </h1>
        <p className={`${sourceCodePro.className}`}>
          I go by AlexFangSW on most of my work related accounts (email, github
          ... etc). If you were wondering, SW means Study and Work.
        </p>
      </header>
      <div className={`center-container ${styles.cards_container}`}>
        <HomePageCards title="ABOUT" image="/tree.png" link="/about" />
        <HomePageCards title="PROJECTS" image="/tree.png" link="/projects" />
        <HomePageCards
          title="EXPERIENCE"
          image="/tree.png"
          link="/experience"
        />
      </div>
    </div>
  );
}
