import styles from "./page.module.css";
import HomePageCards from "@/components/HomePageCards";
import { silkscreen } from "@/utils/fonts";

export default function Home() {
  return (
    <div className={`center-container content-container ${styles.container}`}>
      <header className={`inner-content ${styles.header}`}>
        <h1 className={`${silkscreen.className}`}>
          Hi, I'm Hao-Yun Fang. Welcome to my personal website !
        </h1>
        <p>
          I go by <strong>AlexFangSW</strong> on most of my work related
          accounts (email, github ... etc). If you were wondering, SW means
          study and work.
        </p>
      </header>
      <main
        className={`center-container inner-content ${styles.cards_container}`}
      >
        <HomePageCards
          title="ABOUT"
          image="/quill-pixilart.png"
          link="/about"
        />
        <HomePageCards title="PROJECTS" image="/tree.png" link="/projects" />
        <HomePageCards
          title="EXPERIENCE"
          image="/tree.png"
          link="/experience"
        />
      </main>
    </div>
  );
}
