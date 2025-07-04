import TabHeader from "@/components/TabHeader";
import styles from "./page.module.css";

function Links() {
  return (
    <>
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
    </>
  );
}

function About() {
  return (
    <>
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
    </>
  );
}

function Features() {
  return (
    <>
      <h2>Features</h2>
      <ul>
        <li>Multi-player gameplay</li>
        <li>Minimalistic design inspired by monkeytype</li>
        <li>Player history / progress tracking</li>
        <li>(OAuth2) Login with google</li>
      </ul>
    </>
  );
}

function Previews() {
  return (
    <>
      <h2>Previews</h2>
      <h3>Multi-player gameplay</h3>
      <iframe
        className={`${styles.video}`}
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/l1kkJKtrBEw?si=QTzytp7qRadsdiQJ"
        title="Typephoon Multiplayer Preview"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <h3>Player history / progress tracking</h3>
      <div className={`${styles.img_container}`}>
        <img
          src="https://raw.githubusercontent.com/AlexFangSW/Typephoon/refs/heads/master/doc/pics/screencapture-typephoon-alexfangsw-profile.png"
          alt="Image"
          width={"100%"}
          style={{ objectFit: "contain" }}
        />
      </div>
    </>
  );
}

function TechStack() {
  return (
    <>
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
      <h3>Misc</h3>
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
    </>
  );
}

function Architecture() {
  return (
    <>
      <h2>Architecture</h2>
      <img
        src="https://raw.githubusercontent.com/AlexFangSW/Typephoon_api/refs/heads/master/doc/pics/typing_game_design-Architecture.drawio.svg"
        alt="Image"
        width={"100%"}
        style={{ objectFit: "contain" }}
      />
    </>
  );
}

function Details() {
  return (
    <>
      <h2>Details</h2>
      <p>
        {" "}
        For more implementation details, please refer to{" "}
        <a
          href="https://github.com/AlexFangSW/Typephoon_api/blob/master/doc/build.md#architecture"
          target="_blank"
        >
          <u>Build.md</u>
        </a>{" "}
        in the backend GitHub repository.
      </p>
    </>
  );
}

export default function Page() {
  return (
    <div className={`center-container tab-content-container`}>
      <TabHeader
        title="Typephoon"
        image="https://raw.githubusercontent.com/AlexFangSW/Typephoon/refs/heads/master/doc/pics/homepage.png"
      />
      <main className={`${styles.content} inner-content`}>
        <Links />
        <About />
        <Features />
        <Previews />
        <TechStack />
        <Architecture />
        <Details />
      </main>
    </div>
  );
}
