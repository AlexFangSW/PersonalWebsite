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
          image="/typephoon.png"
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
          title="Coding Notes"
          path="/projects/coding-notes"
          summary="A blog website with backend written using Go standard library"
          image="/coding-notes.png"
          tags={["Go", "netHttp", "PostgreSQL", "Javascript", "NextJS"]}
        />
        <ProjectCard
          title="Homelab"
          path="/projects/homelab"
          summary="Local infrastructure that hosts my personal projects"
          image="/homelab.png"
          tags={[
            "K3s",
            "Cilium",
            "Rancher",
            "OpenVPN",
            "Monitoring",
            "Gateway",
          ]}
        />
        <ProjectCard
          title="Personal Website"
          path="/projects/personal-website"
          summary="My personal website ( You're looking at it ~ ) "
          image="/tree.png"
          tags={["Typescript", "NextJS"]}
        />
      </main>
    </div>
  );
}
