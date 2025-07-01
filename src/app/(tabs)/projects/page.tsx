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
        <DummyProject />
        <DummyProject />
        <DummyProject />
        <DummyProject />
        <DummyProject />
      </main>
    </div>
  );
}
