import TabHeader from "@/components/TabHeader";
import styles from "./page.module.css";

function Links() {
  return (
    <>
      <h2>Links</h2>
      <ul>
        <li>
          <a href="https://blog.alexfangsw.com/" target="_blank">
            Website: <u>blog.alexfangsw.com</u>
          </a>
        </li>
        <li>
          <a href="https://github.com/AlexFangSW/personal_blog" target="_blank">
            Source Code: <u>GitHub</u>
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
      <p>A blog website with backend written using Go standard library. </p>
      <p>
        Blog contents are written in Markdown and rendered as HTML on the
        webpage.{" "}
      </p>
      <p>
        Inspired by <b>Stack Overflow's</b> URL design, a supplemental slug is
        shown at the end of the url for extra info. ( ID is the primary
        indicator )
      </p>
      Ex:
      <ul>
        <li>
          <code>{"https://<domain>/blogs/<id>/<slug>"}</code>
        </li>
        <li>
          <code>
            {"https://notes.alexfangsw.com/blogs/1/a-dummy-blog-post"}
          </code>
        </li>
      </ul>
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
          Language: <strong>Go</strong>
        </li>
        <li>
          Backend Library: <strong>net/http</strong>
        </li>
        <li>
          ORM: <strong>None</strong> this project uses <code>database/sql</code>{" "}
          with <b>raw SQL queries</b>
        </li>
        <li>
          Database Migration: <strong>Goose</strong>
        </li>
        <li>
          Database: <strong>SQLite</strong>
        </li>
        <li>
          API Documentation: Generated with <strong>swaggo</strong>
        </li>
      </ul>
      <h3>Frontend</h3>
      <ul>
        <li>
          Language: <strong>Javascript</strong>
        </li>
        <li>
          Framework: <strong>NextJS</strong>
        </li>
        <li>
          UI Libraries:
          <ul>
            <li>
              <b>Tailwind CSS</b>
            </li>
            <li>
              <b>DaisyUI</b>
            </li>
          </ul>
        </li>
      </ul>
      <h3>CI/CD</h3>
      <ul>
        <li>
          <strong>Drone CI</strong>
        </li>
      </ul>
      <h3>Miscellaneous</h3>
      <ul>
        <li>
          <strong>Docker</strong>
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

function Motive() {
  return (
    <>
      <h2>Motive</h2>
      <p>
        A opportunity to practice <b>GO</b> creating something I could use.
      </p>
      <p>
        This project started around when <b>GO 1.22</b> released.{" "}
      </p>
      <p>
        At that time I was choosing which framework or libraries I sould use.
      </p>
      <p>
        {" "}
        In the release notes, one thing caught my eye:{" "}
        <a href="https://tip.golang.org/doc/go1.22#enhanced_routing_patterns">
          <u>Enhanced routing patterns</u>
        </a>
      </p>
      <p>
        This improved <code>net/http.ServeMux</code> quite a lot, adding
        features such as <b>path params</b>, <b>restrict methods to routes</b>
        ...etc.
      </p>
      <p>
        After seeing this plus a video on YouTube by <b>Dreams of Code</b>:{" "}
        <a href="https://www.youtube.com/watch?v=H7tbjKFSg58">
          <u>
            The standard library now has all you need for advanced routing in Go
          </u>
        </a>
      </p>
      <p>
        I thought, 'why not give the standard library a try ?' After than, this
        project was created.
      </p>
    </>
  );
}

export default function Page() {
  return (
    <div className={`center-container tab-content-container`}>
      <TabHeader title="Coding Notes" image="/coding-notes.png" />
      <main className={`${styles.content} inner-content`}>
        <Links />
        <About />
        <Motive />
        <TechStack />
      </main>
    </div>
  );
}
