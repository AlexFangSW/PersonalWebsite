import Image from "next/image";
import { Fragment } from "react";
import styles from "./ProjectCard.module.css";
import { TAGS } from "@/utils/constants";
import Link from "next/link";

type Params = {
  title: string;
  path: string;
  summary: string;
  image: string;
  tags: Array<string>;
};

function TagList(params: { tags: Array<string> }) {
  return (
    <div className={`center-container ${styles.tag_list}`}>
      {params.tags.map((name, index) => (
        <Fragment key={`tag-${index}`}>{TAGS[name]}</Fragment>
      ))}
    </div>
  );
}

function ProjectImg(params: { source: string }) {
  return (
    <div className={`center-container ${styles.img_container}`}>
      <img
        src={params.source}
        alt="Image"
        style={{ objectFit: "contain", maxWidth: "100%", height: "auto" }}
      />
    </div>
  );
}

export default function ProjectCard(params: Params) {
  return (
    <Link href={params.path}>
      <div className={`center-container ${styles.container}`}>
        <p className={`${styles.title}`}>{params.title}</p>
        <div className={`${styles.summary}`}>{params.summary}</div>
        <ProjectImg source={params.image} />
        <TagList tags={params.tags} />
      </div>
    </Link>
  );
}
