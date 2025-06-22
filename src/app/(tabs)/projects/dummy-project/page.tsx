import TabHeader from "@/components/TabHeader";
import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={`center-container tab-content-container`}>
      <TabHeader
        title="Typephoon"
        image="https://raw.githubusercontent.com/AlexFangSW/Typephoon/refs/heads/master/doc/pics/homepage.png"
      />
      <main className={`${styles.content} inner-content`}>
        <h2>Links</h2>
        <ul>
          <li>
            <a href="https://typephoon.alexfangsw.com" target="_blank">
              Website: <u>typephoon.alexfangsw.com</u>
            </a>
          </li>
          <li>Source Code: </li>
          <ul>
            <li>
              <a
                href="https://github.com/AlexFangSW/Typephoon_api"
                target="_blank"
              >
                <u>Backend</u>
              </a>
            </li>
            <li>
              <a href="https://github.com/AlexFangSW/Typephoon" target="_blank">
                <u>Frontend</u>
              </a>
            </li>
          </ul>
        </ul>
        <h2>About</h2>
        <p>
          Typephoon is a real-time multiplayer typing game with a clean,
          minimalistic interface inspired by{" "}
          <a href="https://monkeytype.com/">
            <u>monkeytype</u>
          </a>
          .
        </p>
        <p>
          {" "}
          Challenge your friends or other players online, track your typing
          progress over time.
        </p>
        <p>
          <b className={`${styles.warning}`}>
            Unplayable on mobile, unless an external keyboard is attatched.
          </b>
        </p>
        <h2>Features</h2>
        <ul>
          <li>Multi-player gameplay</li>
          <li>Minimalistic design inspired by monkeytype</li>
          <li>Player history / progress tracking</li>
          <li>(OAuth2) Login with google</li>
        </ul>
        <h2>Previews</h2>
        <h3>Multi-player gameplay</h3>
        <video width="320" height="240" controls>
          <source
            src="https://github.com/user-attachments/assets/8d2cd119-49a7-4dac-9afd-0c92e0722c5f"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <h3>Player history / progress tracking</h3>
        <div className={`${styles.img_container}`}>
          <img
            src="https://raw.githubusercontent.com/AlexFangSW/Typephoon/refs/heads/master/doc/pics/screencapture-typephoon-alexfangsw-profile.png"
            alt="Image"
            width={"100%"}
            style={{ objectFit: "contain" }}
          />
        </div>
        <h2>Tech stack</h2>
        <h3>Backend</h3>
        <ul>
          <li>
            Language: <strong>Python</strong>
          </li>
          <li>
            Backend framework: <strong>FastAPI</strong>
          </li>
          <li>
            ORM: <strong>SQLAlchemy</strong>
          </li>
          <li>
            Database Migration: <strong>Alembic</strong>
          </li>
          <li>
            Database: <strong>PostgreSQL</strong>
          </li>
          <li>
            Key value store: <strong>Redis</strong>
          </li>
          <li>
            Message Queue: <strong>RabbitMQ</strong>
          </li>
        </ul>
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
            <strong>GitHub Actions</strong>: test and build docker image
          </li>
          <li>
            <strong>Drone CI</strong>: helm packaging
          </li>
        </ul>
        <h3>Miscellaneous</h3>
        <ul>
          <li>
            <strong> WebSockets</strong>
          </li>
          <li>
            <strong>Docker</strong>
          </li>
          <li>
            <strong>Docker compose (Local development)</strong>
          </li>
          <li>
            <strong>Kubernetes</strong>
          </li>
          <li>
            <strong>Helm</strong>
          </li>
        </ul>
      </main>
    </div>
  );
}
