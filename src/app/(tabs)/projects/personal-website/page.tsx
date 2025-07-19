import TabHeader from "@/components/TabHeader";
import styles from "./page.module.css";
import Image from "next/image";

function Links() {
  return (
    <>
      <h2>Links</h2>
      <ul>
        <li>
          <a
            href="https://github.com/AlexFangSW/PersonalWebsite"
            target="_blank"
          >
            Source: <u>GitHub</u>
          </a>
        </li>
      </ul>
    </>
  );
}

function About() {
  return (
    <>
      <h2>About</h2>
      <p>My personal webiste ( You're looking at it !! )</p>
      <p>All three of this pixal art used on this site are drawn by me</p>
      <div className={styles.img_container}>
        <Image
          src="/quill-pixilart.png"
          alt="quill"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <div className={styles.img_container}>
        <Image
          src="/scroll-pixilart.png"
          alt="scroll"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <div className={styles.img_container}>
        <Image
          src="/anvil-pixilart.png"
          alt="anvil"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    </>
  );
}

function TechStack() {
  return (
    <>
      <h2>Tech stack</h2>
      <h3>Frontend</h3>
      <ul>
        <li>
          Language: <strong>Typescript</strong>
        </li>
        <li>
          Framework: <strong>NextJS</strong>
        </li>
      </ul>
      <h3>CI/CD</h3>
      <ul>
        <li>
          <strong>GitHub Actions</strong>: build docker image
        </li>
      </ul>
      <h3>Misc</h3>
      <ul>
        <li>
          <strong>Docker</strong>
        </li>
        <li>
          <strong>Kubernetes</strong>
        </li>
      </ul>
    </>
  );
}

export default function Page() {
  return (
    <div className={`center-container tab-content-container`}>
      <TabHeader title="Personal Website" image="/quill-pixilart.png" />
      <main className={`${styles.content} inner-content`}>
        <Links />
        <About />
        <TechStack />
      </main>
    </div>
  );
}
