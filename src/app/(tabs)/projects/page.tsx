import ProjectCard from "@/components/ProjectCard";
import TabHeader from "@/components/TabHeader";
import styles from "./page.module.css";

function DummyProject() {
  return (
    <ProjectCard
      title="Dummy"
      path="/projects/typephoon"
      summary="This is the summary for thei project, its just a dummy project card with no meaning..."
      image="/tree.png"
      tags={[
        "Python",
        "FastAPI",
        "SQLAlchemy",
        "PostgreSQL",
        "Redis",
        "RabbitMQ",
        "Typescript",
        "NextJS",
      ]}
    />
  );
}

export default function Page() {
  return (
    <div className={`center-container tab-content-container`}>
      <TabHeader title="PROJECTS" image="/tree.png" />
      <main className={`${styles.content} center-container inner-content`}>
        <ProjectCard
          title="Typephoon"
          path="/projects/typephoon"
          summary="A real-time multiplayer typing game with minimalistic design inspired by monkeytype"
          image="https://raw.githubusercontent.com/AlexFangSW/Typephoon/refs/heads/master/doc/pics/homepage.png"
          tags={[
            "Python",
            "FastAPI",
            "SQLAlchemy",
            "PostgreSQL",
            "Redis",
            "RabbitMQ",
            "Typescript",
            "NextJS",
          ]}
        />
        <ProjectCard
          title="Personal Blog"
          path="/projects/personal-blog"
          summary="A blog website with backend written using Go standard library"
          image="/personal-blog.png"
          tags={["Go", "netHttp", "PostgreSQL", "Typescript", "NextJS"]}
        />
        <DummyProject />
        <DummyProject />
      </main>
    </div>
  );
}
